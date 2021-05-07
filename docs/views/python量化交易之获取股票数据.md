---
title: python量化交易之获取股票数据
date: 2021-03-23
categories:
 - 量化交易
tags:
 - 量化交易

---



<div style="border:solid 1px #000;padding: 10px;">
<Icon type='phone'/>
</div>


# python量化交易之获取股票数据



## 股票的由来

> 在17世纪的荷兰海上运输发达，由于海上运输风险很大，所以后来成立的东印度公司就给大家发放凭证，来代表公司的股份，这就是股票最开始的由来。后来也就渐渐衍生出来了各个交易所。

- 股票是股份公司发行的所有权凭证
- 股票是一种投资工具、投资介质



## 股票的特性

- 股票
  - 股份公司的所有权凭证、盈亏自负
- 基金
  - 投资组合（股票、债券、基金、现金）
- 债券
  - 还本付息的有价证券（国债、企业债、金融债券）

> **风险：股票 （±10%）  >   基金（±5%）   >   债券（±1%）**



## 获取股票数据的三种方式

- 通过网络爬虫，爬取财经网站的数据
  - 新浪财经、雅虎财经、东方财富等
- 数据接口
  - 免费的数据接口
    - 量化交易平台、开源代码库
  - 通过数据服务商使用付费的数据接口
    - Wind、彭博、炒股软件等



## JQData

> JQData的数据字典
>
> - 股票数据
> - 行业概念数据
> - 指数数据
> - 宏观经济数据
> - 期货数据
> - 期权数据
> - 场内基金数据
> - 场外基金数据



### 使用JQData查询股票行情数据

```python
# 使用JQData

# 1、安装JQData库
# pip install jqdatasdk

# 2、调用JQData库
from jqdatasdk import *
import time
# 引入pandas库整理数据
import pandas as pd

# 3、填入自己的账号和密码
auth('13027608010', 'Tby001990')

# 上海证券交易所	.XSHG	'600519.XSHG'	贵州茅台
# 深圳证券交易所	.XSHE	'000001.XSHE'	平安银行

# 4、获取股票价格
df = get_price('000001.XSHE', count=100, end_date='2021-02-22',
               frequency='1m')  # 获得000001.XSHG的2015年01月的分钟数据, 只获取open+close字段
# 使用pandas.set_option函数将输出的结果进行数据分析整理，防止数据过多被隐藏数据
pd.set_option('display.max_rows', 100)
print(df)


# 5、获取所有A股的行情数据
# 将所有股票列表转换成数组
# stocks = list(get_all_securities(['stock']).index)

# df = get_price(stocks, count=10, end_date='2021-02-22',panel=False,
#                frequency='daily')  # 获得000001.XSHG的2015年01月的分钟数据, 只获取open+close字段
# print(df)


# # 换一种输出格式输出所有A股的行情数据
# for stock_item in stocks:
#     print('正在获取股票行情代码，股票代码：',stock_item)
#     df = get_price(stock_item, count=10, end_date='2021-02-22', panel=False,
#                    frequency='daily')
#     print(df)
#     time.sleep(3)

```



### 使用Resample函数转换时间序列

> - 什么是Resample？
>   - Resample是Python数据分析库Pandas的方法函数，主要作用转换时间序列的频次（日K转换至周K）和汇总统计
>
> 

```python
from jqdatasdk import *
import pandas as pd

auth('13027608010', 'Tby001990')
 

# resample函数的使用

# 转换周期：日K转换为周K
# 获取日K
df = get_price('000001.XSHE', count=20, end_date='2021-02-22',
               frequency='1d')
df['weekday']=df.index.weekday
print(df)

# 获取周K（当周的）：开盘价（当周第一天）、收盘价（当周最后一天）、最高价（当周）、最低价（当周）
df_week=pd.DataFrame()
df_week['open']=df['open'].resample('W').first()
df_week['close']=df['close'].resample('W').last()
df_week['high']=df['high'].resample('W').max()
df_week['low']=df['low'].resample('W').min()


# 汇总统计：统计一下月成交量、成交额   （sum）
df_week['volume(sum)']=df['volume'].resample('W').sum()
df_week['money(sum)']=df['money'].resample('W').sum()

print(df_week)

```



### resample函数应用

```python
# 引入相关的包
from jqdatasdk import *
import pandas as pd

# 连接JoinData
auth('13027608010','Tby001990')


#第一题，使用resample函数计算平安银行2021年1月的月K，并得出该月K的开盘价、收盘价、最高价、最低价 

# # 获取股票数据
# df=get_price('000001.XSHE',start_date='2021-01-01',end_date='2021-01-31',frequency='1d')
# print(df)
# # 使用resample函数将日K转换为月K
# df_month=pd.DataFrame()
# df_month['open']=df['open'].resample('M').first()
# df_month['close']=df['close'].resample('M').last()
# df_month['high']=df['high'].resample('M').max()
# df_month['low']=df['low'].resample('M').min()
# print(df_month)


# 第二题，使用resample函数计算平安银行2020年每个月的总交易量、交易额

# # 获取股票数据
# df=get_price('000001.XSHE',start_date='2020-01-01',end_date='2021-12-31',frequency='1d')
# # pd.set_option('display.max_rows', 10000)
# # pd.set_option('display.max_columns',10)
# # 使用resample函数汇总每月交易量和交易额
# df_month=pd.DataFrame()
# df_month['volume(sum)']=df['volume'].resample('M').sum()
# df_month['money(sum)']=df['money'].resample('M').sum()
# print(df_month)
```



### 使用JQData查询财务指标

> **什么是财务指标**
>
> - 资产负债表（财务状况）---》体现企业家底和负债情况
>   - 资产
>   - 负债
>   - 所有者利益
> - 利润表（经营成果）---》公司盈利能力、赚了多少、怎么赚的；隐含着对未来利润增长的预期；体现市场空间、成长能力
>   - 收入
>   - 成本费用
>   - 利润
> - 现金流量表（现金流量）---》体现造血能力、竞争优势、议价优势
>   - 现金流入
>   - 现金流出
>
> **上述中，现金流量表是最不容易进行造假。因为资产负债表和利润表都是执行权责发生制，而现金流量表则使用的是收付实现制。必须有真正的现金流入和流出才可以进行记录。**



> 使用JQData获取了相关的财务指标

```python
# 引入相关的包
from jqdatasdk import *
import pandas as pd

# 连接JoinData
auth('13027608010', 'Tby001990')

pd.set_option('display.max_rows', 10000)
pd.set_option('display.max_columns', 10)

'''
获取股票财务指标
获取2020年年度报表
'''
df = get_fundamentals(query(indicator), statDate="2020")  # 获取财务指标数据
# df.to_csv('finance/financefinance2020.csv') # 存储数据

# 基于盈利指标选股：eps(每股收益)、operating_profit（经营活动净收益）、roe（净资产收益率）、inc_net_profit_year_on_year（净利润同比增长率）
df = df[(df['eps'] > 0) & (df['operating_profit'] > 2212173617) &
        (df['roe'] > 50) & (df['inc_net_profit_year_on_year'] > 50)]
df.to_csv('test.csv')

print(df)

```

> **讲师透漏的小诀窍：利用成长增速进行选股（概率性很高），看四千多支股票看三年或者五年的成长性指标，成长性指标排在前列的股票，股票价格在今年大概率也会上涨，除非行情特别不好或者该股票的股价已经很高了**



### 使用JQData查询估值指标

> **对企业估值的方法**
>
> - 绝对估值法
>   - 定价模型---》计算企业内在价值
> - 相对估值法
>   - 估值指标---》PE市盈率、PB市净率、PS市销率
>   - 市盈率=

