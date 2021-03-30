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

