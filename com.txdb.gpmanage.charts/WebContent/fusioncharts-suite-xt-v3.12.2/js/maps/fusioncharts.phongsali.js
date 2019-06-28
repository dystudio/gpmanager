/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.Phongsali.1.08-09-2016 04:23:01
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-phongsali",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"Phongsali",revision:1,standaloneInit:!0,baseWidth:500,baseHeight:600,baseScaleFactor:10,entities:{"LA.PH.PH":{outlines:[["M",2404,1129,"Q",2370,1153,2346,1173,2311,1202,2283,1218,2249,1237,2201,1252,2181,1258,2114,1269,
2054,1277,2032,1279,2019,1281,1986,1275,1953,1269,1948,1268,1944,1268,1923,1268,1894,1268,1867,1277,1844,1286,1827,1301,1824,1303,1823,1305,1816,1316,1805,1338,1788,1371,1787,1374,1776,1399,1751,1423,1724,1445,1715,1453,1708,1459,1689,1496,1667,1536,1667,1536,1635,1577,1635,1578,1623,1596,1623,1616,1623,1624,1624,1639,1626,1650,1626,1656,1626,1658,1626,1659,1628,1666,1628,1674,1629,1679,1629,1704,"L",1629,1725,"Q",1629,1734,1629,1735,1628,1738,1625,1741,1617,1769,1617,1770,1608,1783,1575,1818,1566,
1828,1534,1867,1502,1903,1481,1917,1474,1921,1453,1930,1452,1931,1441,1940,1429,1950,1417,1958,1410,1963,1402,1970,1394,1977,1393,1980,1392,1982,1388,1991,1388,1992,1388,1993,1459,2106,1492,2132,1527,2160,1539,2176,1553,2193,1582,2222,1606,2247,1618,2265,1623,2271,1634,2292,1645,2311,1652,2321,1661,2332,1665,2346,1669,2360,1673,2389,1684,2450,1678,2519,1679,2556,1673,2608,1666,2665,1654,2701,1638,2745,1641,2799,1642,2842,1638,2892,"L",1638,3132,"Q",1641,3176,1629,3206,1620,3232,1594,3259,1577,3278,
1542,3303,1516,3326,1506,3356,1506,3358,1505,3360,1487,3400,1486,3424,1485,3449,1486,3473,1486,3497,1489,3525,1490,3552,1490,3576,1490,3600,1489,3614,"L",1490,3637,"Q",1488,3649,1492,3671,1497,3692,1492,3750,"L",1492,3771,"Q",1504,3765,1516,3759,1546,3745,1609,3722,1645,3709,1686,3690,1695,3687,1716,3679,1738,3670,1766,3665,1771,3664,1796,3657,1820,3650,1837,3647,1849,3640,1859,3635,1870,3631,1873,3628,1885,3620,1900,3612,1909,3583,1944,3559,1985,3537,1999,3525,2004,3521,2011,3500,2019,3477,2020,
3474,2043,3434,2049,3427,2064,3410,2086,3413,2099,3414,2121,3411,2145,3406,2156,3407,2163,3407,2165,3407,2178,3403,2188,3396,2205,3381,2216,3373,2224,3366,2232,3351,2239,3336,2251,3321,2263,3306,2275,3288,2287,3270,2293,3262,2333,3215,2356,3193,2365,3184,2376,3182,2381,3180,2395,3180,2412,3180,2413,3170,2411,3158,2413,3152,2419,3137,2439,3112,2462,3084,2471,3073,2472,3071,2486,3061,2501,3051,2506,3044,2516,3031,2520,3024,2529,3013,2536,3007,2585,2997,2593,2994,2610,2989,2638,2973,2656,2964,2692,2950,
2721,2937,2738,2921,2746,2913,2751,2903,2756,2894,2760,2890,2775,2876,2858,2848,2859,2848,2875,2840,2892,2832,2898,2830,2917,2824,2946,2814,2947,2814,2948,2813,2956,2808,2973,2799,2992,2789,2998,2784,3010,2773,3020,2756,3034,2734,3038,2728,3104,2640,3104,2603,3104,2578,3094,2566,3079,2553,3068,2539,3066,2537,3041,2515,3020,2495,3014,2486,2987,2437,2977,2424,2967,2412,2963,2392,2961,2370,2958,2362,2958,2360,2950,2309,2942,2258,2942,2238,2942,2208,2956,2149,2970,2090,2970,2059,2974,2035,2981,1982,2987,
1932,2989,1916,2989,1914,2989,1911,2991,1875,2995,1837,2998,1812,2998,1774,2998,1733,2992,1717,2987,1701,2988,1687,2988,1673,2988,1661,"L",2988,1645,"Q",2990,1617,2996,1586,3001,1555,3005,1531,3005,1530,3006,1528,3009,1496,3020,1458,3034,1419,3040,1396,3031,1388,3019,1383,2963,1365,2943,1353,2914,1335,2909,1286,2908,1283,2907,1280,2894,1248,2884,1239,2875,1230,2850,1230,2835,1230,2819,1236,2803,1241,2788,1241,2764,1241,2751,1218,2745,1204,2738,1165,2730,1127,2722,1112,2709,1089,2682,1089,2632,1095,
2624,1095,2578,1095,2561,1074,2550,1060,2548,1028,2547,1006,2544,994,2510,1019,2491,1039,2471,1058,2449,1084,"Q",2428,1109,2404,1129,"Z"]],label:"Phongsaly District",shortLabel:"PH",labelPosition:[224.6,238.2],labelAlignment:["center","middle"]},"LA.PH.MA":{outlines:[["M",4362,2571,"Q",4362,2604,4377,2652,4393,2699,4393,2740,4393,2789,4370,2813,4327,2844,4287,2874,4243,2908,4170,2985,4126,3033,4093,3033,3986,3019,3962,3019,3929,3019,3922,3027,3906,3045,3891,3053,3891,3054,3890,3054,"L",3890,3053,
"Q",3844,3039,3798,3058,3761,3074,3706,3110,3664,3138,3622,3173,3611,3183,3541,3243,3439,3332,3411,3396,3375,3476,3318,3569,3317,3570,3316,3572,3309,3581,3307,3588,3304,3595,3304,3604,3304,3630,3327,3654,3350,3679,3350,3698,3350,3714,3328,3753,3316,3774,3297,3805,3291,3818,3283,3832,3278,3843,3281,3866,3282,3881,3279,3899,3277,3908,3274,3921,3273,3923,3273,3924,3269,3934,3253,3973,3237,4010,3232,4027,3231,4029,3227,4051,3225,4067,3216,4081,3207,4097,3198,4109,3195,4115,3195,4134,3195,4148,3196,4160,
3197,4171,3197,4177,3197,4189,3188,4202,3182,4210,3167,4232,3137,4283,3137,4377,3137,4402,3139,4445,3142,4486,3142,4504,3153,4515,3167,4531,3188,4556,3180,4573,3163,4612,3163,4639,3163,4666,3190,4737,3217,4805,3217,4806,3209,4841,3225,4890,3234,4920,3260,4972,3270,4991,3274,5017,3276,5032,3280,5059,3289,5104,3331,5124,3360,5137,3430,5142,3488,5146,3559,5144,3605,5142,3645,5148,3669,5152,3729,5162,3737,5164,3767,5171,3792,5176,3807,5177,3824,5179,3852,5197,3880,5215,3939,5223,3998,5231,4054,5260,4110,
5289,4136,5368,4141,5365,4147,5362,4184,5341,4212,5335,4257,5325,4273,5314,4297,5297,4297,5261,4297,5244,4276,5203,4256,5161,4256,5141,4256,5122,4296,5076,4335,5028,4335,5010,4335,4992,4313,4976,4290,4960,4290,4948,4290,4939,4319,4914,4349,4889,4365,4889,4375,4889,4397,4911,4411,4925,4420,4936,4422,4939,4431,4953,4440,4966,4451,4970,4462,4974,4484,4974,4493,4974,4544,4950,4594,4925,4647,4925,4657,4925,4718,4933,4780,4942,4792,4942,4808,4942,4813,4938,4821,4933,4821,4919,4821,4911,4811,4885,4803,4861,
4799,4857,4783,4835,4761,4833,4735,4835,4721,4833,4679,4829,4673,4782,4675,4736,4673,4716,4672,4712,4672,4709,4707,4471,4530,4471,4517,4471,4478,4499,4441,4527,4411,4527,4389,4527,4364,4504,4339,4482,4339,4463,4339,4446,4376,4421,4395,4408,4425,4389,4458,4362,4493,4330,4516,4313,4547,4313,"L",4607,4317,"Q",4639,4317,4652,4304,4664,4292,4664,4270,4664,4262,4643,4231,4621,4201,4621,4155,4621,4076,4659,4012,4703,3945,4726,3896,4728,3893,4730,3890,4779,3812,4779,3787,4779,3773,4773,3769,4769,3767,4758,
3767,4750,3767,4736,3783,4708,3815,4705,3817,4654,3868,4582,3868,4565,3868,4562,3866,4560,3864,4560,3852,4560,3840,4576,3810,4584,3795,4596,3775,4596,3773,4598,3771,4617,3727,4679,3648,4776,3524,4785,3512,4819,3463,4901,3390,4965,3322,4965,3239,4965,3172,4941,3134,4916,3096,4916,3063,4916,3040,4934,3005,4951,2970,4951,2962,4951,2908,4916,2908,4872,2918,4855,2914,4794,2898,4784,2849,4781,2826,4780,2817,4779,2804,4771,2804,4770,2804,4569,2878,4501,2878,4502,2781,4516,2661,4508,2615,4505,2603,4505,2557,
4506,2504,4503,2475,4493,2373,4432,2373,4378,2373,4366,2435,"Q",4362,2457,4362,2571,"Z"]],label:"May District",shortLabel:"MA",labelPosition:[405.1,387],labelAlignment:["center","middle"]},"LA.PH.KH":{outlines:[["M",3004,4413,"Q",2993,4406,2977,4401,2963,4397,2953,4397,2940,4397,2916,4405,2891,4414,2868,4428,2861,4432,2849,4441,2835,4448,2815,4445,2806,4443,2795,4447,2784,4451,2779,4458,"L",2726,4480,"Q",2712,4485,2712,4486,2709,4488,2693,4501,2675,4516,2663,4533,2657,4543,2645,4563,2617,4599,2583,
4604,2548,4609,2484,4610,2420,4611,2407,4624,2394,4636,2361,4659,2314,4689,2306,4692,2298,4695,2272,4696,2257,4697,2244,4695,2230,4694,2222,4692,2215,4690,2214,4689,2212,4689,2212,4689,2193,4686,2162,4670,2129,4653,2085,4654,2041,4655,1999,4678,1957,4701,1945,4701,1940,4701,1934,4698,1929,4695,1927,4695,1927,4695,1926,4695,1917,4695,1883,4717,"L",1843,4743,"Q",1824,4751,1806,4771,1794,4783,1776,4807,1771,4813,1762,4822,1756,4828,1742,4840,"L",1690,4856,"Q",1671,4857,1656,4877,1638,4902,1629,4907,
1635,4908,1642,4909,1651,4911,1676,4930,1702,4951,1705,4951,1730,4959,1735,4962,1755,4972,1761,4989,1766,5002,1785,5068,1793,5099,1809,5119,1822,5134,1859,5184,1892,5229,1900,5237,1923,5292,2002,5299,2035,5302,2064,5324,2091,5344,2115,5344,2134,5344,2170,5325,2204,5306,2222,5305,2223,5305,2224,5305,2224,5308,2240,5310,2270,5319,2325,5354,2357,5373,2381,5382,2395,5387,2430,5399,2454,5407,2490,5424,2516,5436,2533,5440,2565,5448,2571,5453,2580,5461,2580,5485,2580,5495,2572,5519,2564,5542,2564,5552,2564,
5582,2580,5599,2594,5614,2614,5614,2634,5614,2659,5582,2684,5545,2692,5536,2709,5549,2729,5573,"L",2761,5614,"Q",2765,5619,2788,5649,2812,5677,2834,5677,2846,5677,2856,5671,2865,5665,2875,5665,2876,5665,2876,5665,2877,5665,2877,5665,2880,5665,2892,5662,2912,5662,2940,5675,2953,5682,2976,5696,2983,5701,2998,5701,3019,5701,3038,5677,3058,5653,3072,5653,3078,5653,3120,5690,3136,5713,3138,5719,3142,5729,3142,5751,3142,5782,3113,5810,3084,5838,3084,5855,3084,5873,3139,5918,3196,5964,3230,5964,3254,5964,
3281,5938,3292,5927,3310,5905,3319,5893,3333,5867,3347,5843,3366,5818,3417,5749,3431,5733,3477,5677,3507,5668,3514,5666,3604,5643,3666,5627,3726,5601,3761,5585,3806,5533,3856,5477,3868,5468,"L",3867,5467,"Q",3869,5466,3871,5466,3945,5435,4084,5391,4103,5385,4136,5368,4110,5289,4054,5260,3998,5231,3939,5223,3880,5215,3852,5197,3824,5179,3807,5177,3792,5176,3767,5171,3737,5164,3729,5162,3669,5152,3645,5148,3605,5142,3559,5144,3488,5146,3430,5142,3360,5137,3331,5124,3289,5104,3280,5059,3276,5032,3274,
5017,3270,4991,3260,4972,3234,4920,3225,4890,3209,4841,3217,4806,3217,4805,3190,4737,3163,4666,3163,4639,3163,4612,3180,4573,3188,4556,3167,4531,3153,4515,3142,4504,3137,4499,3133,4494,3129,4490,3126,4487,3111,4468,3102,4459,3083,4438,3054,4439,3044,4439,3029,4430,"Q",3013,4417,3004,4413,"Z"]],label:"Khoua District",shortLabel:"KH",labelPosition:[288.2,518],labelAlignment:["center","middle"]},"LA.PH.SA":{outlines:[["M",3020,1458,"Q",3009,1496,3006,1528,3005,1530,3005,1531,3001,1555,2996,1586,2990,
1617,2988,1645,"L",2988,1661,"Q",2988,1673,2988,1687,2987,1701,2992,1717,2998,1733,2998,1774,2998,1812,2995,1837,2991,1875,2989,1911,2989,1914,2989,1916,2987,1932,2981,1982,2974,2035,2970,2059,2970,2090,2956,2149,2942,2208,2942,2238,2942,2258,2950,2309,2958,2360,2958,2362,2961,2370,2963,2392,2967,2412,2977,2424,2987,2437,3014,2486,3020,2495,3041,2515,3066,2537,3068,2539,3079,2553,3094,2566,3104,2578,3104,2603,3104,2640,3038,2728,3034,2734,3020,2756,3010,2773,2998,2784,2992,2789,2973,2799,2956,2808,
2948,2813,2947,2814,2946,2814,2917,2824,2898,2830,2892,2832,2875,2840,2859,2848,2858,2848,2775,2876,2760,2890,2756,2894,2751,2903,2746,2913,2738,2921,2721,2937,2692,2950,2656,2964,2638,2973,2610,2989,2593,2994,2585,2997,2536,3007,2529,3013,2520,3024,2516,3031,2506,3044,2501,3051,2486,3061,2472,3071,2471,3073,2462,3084,2439,3112,2419,3137,2413,3152,2411,3158,2413,3170,2412,3180,2395,3180,2381,3180,2376,3182,2365,3184,2356,3193,2333,3215,2293,3262,2287,3270,2275,3288,2263,3306,2251,3321,2239,3336,2232,
3351,2224,3366,2216,3373,2205,3381,2188,3396,2178,3403,2165,3407,2187,3420,2242,3451,2298,3481,2321,3491,2344,3501,2387,3528,2429,3555,2430,3573,2430,3590,2397,3594,2364,3598,2361,3600,2347,3608,2322,3634,2320,3636,2315,3644,2309,3652,2304,3655,2300,3656,2289,3658,2279,3659,2279,3658,2266,3658,2241,3654,"L",2218,3649,"Q",2210,3649,2199,3659,2190,3669,2189,3676,2188,3690,2188,3719,2188,3747,2189,3753,2191,3772,2202,3788,2221,3812,2226,3836,2227,3845,2227,3886,"L",2227,3934,"Q",2227,3951,2220,3963,
2219,3965,2205,3980,2202,3984,2182,4003,2164,4020,2160,4025,2153,4035,2142,4045,2131,4056,2125,4063,2123,4064,2123,4065,2116,4076,2102,4095,2087,4114,2080,4128,2072,4142,2058,4160,2047,4175,2047,4192,2047,4210,2061,4240,2074,4270,2074,4285,2074,4308,2067,4323,2062,4335,2042,4358,2041,4359,2040,4360,2037,4365,2029,4372,2021,4385,2023,4400,2020,4412,2019,4420,2019,4423,2019,4438,2019,4454,2011,4475,1998,4509,1997,4515,1993,4529,1982,4558,1969,4591,1966,4601,1959,4621,1950,4652,1942,4677,1927,4695,1929,
4695,1934,4698,1940,4701,1945,4701,1957,4701,1999,4678,2041,4655,2085,4654,2129,4653,2162,4670,2193,4686,2212,4689,2212,4689,2214,4689,2215,4690,2222,4692,2230,4694,2244,4695,2257,4697,2272,4696,2298,4695,2306,4692,2314,4689,2361,4659,2394,4636,2407,4624,2420,4611,2484,4610,2548,4609,2583,4604,2617,4599,2645,4563,2657,4543,2663,4533,2675,4516,2693,4501,2709,4488,2712,4486,2712,4485,2726,4480,"L",2779,4458,"Q",2784,4451,2795,4447,2806,4443,2815,4445,2835,4448,2849,4441,2861,4432,2868,4428,2891,4414,
2916,4405,2940,4397,2953,4397,2963,4397,2977,4401,2993,4406,3004,4413,3013,4417,3029,4430,3044,4439,3054,4439,3083,4438,3102,4459,3111,4468,3126,4487,3129,4490,3133,4494,3137,4499,3142,4504,3142,4486,3139,4445,3137,4402,3137,4377,3137,4283,3167,4232,3182,4210,3188,4202,3197,4189,3197,4177,3197,4171,3196,4160,3195,4148,3195,4134,3195,4115,3198,4109,3207,4097,3216,4081,3225,4067,3227,4051,3231,4029,3232,4027,3237,4010,3253,3973,3269,3934,3273,3924,3273,3923,3274,3921,3277,3908,3279,3899,3282,3881,3281,
3866,3278,3843,3283,3832,3291,3818,3297,3805,3316,3774,3328,3753,3350,3714,3350,3698,3350,3679,3327,3654,3304,3630,3304,3604,3304,3595,3307,3588,3309,3581,3316,3572,3317,3570,3318,3569,3375,3476,3411,3396,3439,3332,3541,3243,3611,3183,3622,3173,3664,3138,3706,3110,3761,3074,3798,3058,3844,3039,3890,3053,"L",3889,3052,"Q",3870,3020,3863,2978,3851,2904,3847,2892,3830,2836,3803,2801,3786,2778,3786,2736,3786,2684,3810,2646,3834,2608,3834,2584,3834,2560,3823,2545,3811,2528,3808,2491,3805,2462,3793,2433,
3782,2406,3782,2395,3782,2386,3790,2368,3799,2351,3799,2339,3799,2320,3777,2316,3770,2315,3731,2317,3699,2318,3684,2311,3663,2301,3663,2271,3663,2257,3682,2226,3702,2195,3702,2177,3702,2112,3623,2078,3530,2048,3500,2025,3469,2001,3404,1973,3355,1951,3319,1914,3318,1912,3316,1911,3303,1902,3284,1873,3258,1834,3258,1811,3258,1774,3313,1760,3341,1752,3351,1747,3368,1736,3368,1716,3368,1688,3305,1688,3283,1688,3264,1678,3243,1667,3232,1648,3223,1630,3209,1611,3187,1580,3171,1573,3147,1567,3135,1561,3114,
1549,3114,1521,3115,1505,3105,1497,3093,1490,3087,1485,3079,1478,3077,1466,3075,1450,3072,1444,3059,1418,3050,1407,3045,1401,3040,1396,"Q",3034,1419,3020,1458,"Z"]],label:"Samphanh District",shortLabel:"SA",labelPosition:[290.8,304.8],labelAlignment:["center","middle"]},"LA.PH.BN":{outlines:[["M",1618,2265,"Q",1606,2247,1582,2222,1553,2193,1539,2176,1527,2160,1492,2132,1459,2106,1388,1993,1383,2E3,1372,2E3,1358,2E3,1311,2027,1263,2054,1263,2059,1263,2063,1260,2064,1257,2066,1256,2066,1220,2122,1072,
2173,1025,2189,970,2194,934,2196,914,2209,891,2222,891,2246,891,2278,903,2299,916,2320,916,2329,916,2343,893,2353,881,2358,863,2365,857,2368,840,2388,821,2410,815,2415,818,2416,821,2418,829,2428,829,2451,829,2499,784,2617,739,2735,739,2761,739,2786,740,2792,744,2812,760,2827,771,2836,777,2850,783,2864,789,2892,787,2919,787,2965,787,2969,785,2985,785,3001,787,3008,788,3016,789,3024,792,3030,823,3056,853,3074,930,3097,992,3124,992,3180,992,3301,874,3319,814,3323,792,3326,755,3331,755,3350,755,3378,
785,3458,815,3539,815,3547,815,3596,771,3629,760,3637,741,3650,727,3661,727,3672,727,3710,747,3745,766,3780,766,3798,766,3802,762,3829,806,3829,824,3827,839,3825,866,3824,872,3821,931,3830,989,3839,1009,3840,"L",1060,3838,"Q",1059,3839,1099,3833,1139,3827,1156,3829,1173,3831,1200,3826,1227,3821,1242,3819,1285,3812,1365,3809,1445,3805,1466,3789,1477,3780,1492,3771,"L",1492,3750,"Q",1497,3692,1492,3671,1488,3649,1490,3637,"L",1489,3614,"Q",1490,3600,1490,3576,1490,3552,1489,3525,1486,3497,1486,3473,
1485,3449,1486,3424,1487,3400,1505,3360,1506,3358,1506,3356,1516,3326,1542,3303,1577,3278,1594,3259,1620,3232,1629,3206,1641,3176,1638,3132,"L",1638,2892,"Q",1642,2842,1641,2799,1638,2745,1654,2701,1666,2665,1673,2608,1679,2556,1678,2519,1684,2450,1673,2389,1669,2360,1665,2346,1661,2332,1652,2321,1645,2311,1634,2292,"Q",1623,2271,1618,2265,"Z"]],label:"Boun Neua District",shortLabel:"BN",labelPosition:[120.3,291.6],labelAlignment:["center","middle"]},"LA.PH.NH":{outlines:[["M",1904,226,"Q",1874,225,
1827,218,1802,214,1766,191,1735,170,1694,170,1674,170,1647,194,1638,204,1601,247,1586,274,1584,277,1549,277,1539,277,1525,277,1519,280,1498,291,1492,293,1484,295,1465,295,1434,295,1403,279,1373,263,1358,263,1316,263,1298,295,1288,313,1280,364,1272,414,1261,433,1242,464,1198,464,1174,464,1126,414,1086,371,1078,354,1071,337,1056,328,1029,313,1024,309,1016,302,1008,270,998,233,998,232,975,177,964,154,947,113,930,92,886,37,784,37,723,37,710,43,705,46,656,88,636,106,599,113,554,123,544,128,531,134,519,
151,508,167,507,182,506,195,485,202,462,210,459,218,455,228,455,246,455,257,456,277,455,307,441,316,428,325,428,346,428,361,452,404,476,446,476,463,476,481,470,489,466,496,448,524,415,541,409,591,401,658,388,682,385,689,359,731,336,773,334,784,333,798,312,819,288,840,266,840,256,840,204,829,152,818,146,818,132,818,117,831,97,850,83,889,74,911,53,918,35,924,35,949,35,1023,81,1041,94,1046,122,1056,145,1068,159,1092,175,1120,212,1175,241,1225,241,1272,"L",241,1293,"Q",241,1295,238,1298,236,1304,234,
1312,233,1319,233,1321,220,1347,212,1352,208,1354,199,1358,176,1375,170,1383,162,1395,162,1414,162,1447,205,1529,245,1605,249,1659,253,1680,296,1718,337,1753,337,1777,337,1798,316,1825,294,1853,294,1889,294,1932,303,1948,318,1974,363,1976,371,1976,395,1980,426,1984,430,1990,432,1993,448,2030,457,2049,476,2049,502,2049,530,2031,559,2012,563,2012,573,2012,582,2028,597,2053,588,2106,587,2121,582,2148,580,2174,585,2205,588,2221,632,2241,656,2252,690,2267,712,2280,715,2317,718,2359,724,2366,751,2397,798,
2408,809,2411,815,2415,821,2410,840,2388,857,2368,863,2365,881,2358,893,2353,916,2343,916,2329,916,2320,903,2299,891,2278,891,2246,891,2222,914,2209,934,2196,970,2194,1025,2189,1072,2173,1220,2122,1256,2066,1257,2066,1260,2064,1263,2063,1263,2059,1263,2054,1311,2027,1358,2E3,1372,2E3,1383,2E3,1388,1993,1388,1992,1388,1991,1392,1982,1393,1980,1394,1977,1402,1970,1410,1963,1417,1958,1429,1950,1441,1940,1452,1931,1453,1930,1474,1921,1481,1917,1502,1903,1534,1867,1566,1828,1575,1818,1608,1783,1617,1770,
1617,1769,1625,1741,1628,1738,1629,1735,1629,1734,1629,1725,"L",1629,1704,"Q",1629,1679,1628,1674,1628,1666,1626,1659,1626,1658,1626,1656,1626,1650,1624,1639,1623,1624,1623,1616,1623,1596,1635,1578,1635,1577,1667,1536,1667,1536,1689,1496,1708,1459,1715,1453,1724,1445,1751,1423,1776,1399,1787,1374,1788,1371,1805,1338,1816,1316,1823,1305,1824,1303,1827,1301,1844,1286,1867,1277,1894,1268,1923,1268,1944,1268,1948,1268,1953,1269,1986,1275,2019,1281,2032,1279,2054,1277,2114,1269,2181,1258,2201,1252,2249,
1237,2283,1218,2311,1202,2346,1173,2370,1153,2404,1129,2428,1109,2449,1084,2471,1058,2491,1039,2510,1019,2544,994,2542,986,2540,982,2529,962,2494,962,2438,967,2431,967,2396,967,2395,917,2395,881,2394,875,2391,852,2378,840,2330,811,2292,788,2217,743,2217,724,2217,713,2231,703,2245,692,2245,665,2245,645,2222,625,2194,605,2186,597,2173,585,2173,560,2175,534,2175,526,2175,496,2152,469,2135,448,2116,438,2094,428,2074,412,2053,395,2047,382,2026,310,2012,277,1988,219,1949,224,"Q",1922,227,1904,226,"Z"]],
label:"Yot Ou District",shortLabel:"NH",labelPosition:[128.9,122.6],labelAlignment:["center","middle"]},"LA.PH.BT":{outlines:[["M",2121,3411,"Q",2099,3414,2086,3413,2064,3410,2049,3427,2043,3434,2020,3474,2019,3477,2011,3500,2004,3521,1999,3525,1985,3537,1944,3559,1909,3583,1900,3612,1885,3620,1873,3628,1870,3631,1859,3635,1849,3640,1837,3647,1820,3650,1796,3657,1771,3664,1766,3665,1738,3670,1716,3679,1695,3687,1686,3690,1645,3709,1609,3722,1546,3745,1516,3759,1504,3765,1492,3771,1477,3780,1466,3789,
1445,3805,1365,3809,1285,3812,1242,3819,1227,3821,1200,3826,1173,3831,1156,3829,1139,3827,1099,3833,1059,3839,1060,3838,"L",1009,3840,"Q",989,3839,931,3830,872,3821,866,3824,839,3825,824,3827,806,3829,762,3829,759,3846,754,3872,740,3947,733,3963,727,3974,708,4042,689,4108,684,4118,"L",684,4149,687,4149,"Q",687,4163,685,4210,685,4270,699,4285,706,4294,728,4309,740,4318,761,4333,765,4336,793,4347,825,4360,837,4361,866,4363,907,4362,936,4368,947,4414,953,4439,1007,4458,1057,4477,1057,4504,1057,4513,
1053,4530,1049,4546,1049,4570,1049,4616,1052,4624,1059,4640,1094,4661,1102,4665,1128,4696,1156,4728,1163,4734,1169,4740,1217,4742,1270,4745,1272,4745,1306,4756,1311,4759,1323,4770,1323,4802,1323,4816,1320,4867,1326,4912,1371,4912,1380,4912,1392,4900,1407,4884,1417,4875,1456,4838,1508,4838,1535,4838,1547,4847,1554,4851,1563,4867,1581,4896,1629,4907,1638,4902,1656,4877,1671,4857,1690,4856,"L",1742,4840,"Q",1756,4828,1762,4822,1771,4813,1776,4807,1794,4783,1806,4771,1824,4751,1843,4743,"L",1883,4717,
"Q",1917,4695,1926,4695,1927,4695,1927,4695,1942,4677,1950,4652,1959,4621,1966,4601,1969,4591,1982,4558,1993,4529,1997,4515,1998,4509,2011,4475,2019,4454,2019,4438,2019,4423,2019,4420,2020,4412,2023,4400,2021,4385,2029,4372,2037,4365,2040,4360,2041,4359,2042,4358,2062,4335,2067,4323,2074,4308,2074,4285,2074,4270,2061,4240,2047,4210,2047,4192,2047,4175,2058,4160,2072,4142,2080,4128,2087,4114,2102,4095,2116,4076,2123,4065,2123,4064,2125,4063,2131,4056,2142,4045,2153,4035,2160,4025,2164,4020,2182,4003,
2202,3984,2205,3980,2219,3965,2220,3963,2227,3951,2227,3934,"L",2227,3886,"Q",2227,3845,2226,3836,2221,3812,2202,3788,2191,3772,2189,3753,2188,3747,2188,3719,2188,3690,2189,3676,2190,3669,2199,3659,2210,3649,2218,3649,"L",2241,3654,"Q",2266,3658,2279,3658,2279,3659,2289,3658,2300,3656,2304,3655,2309,3652,2315,3644,2320,3636,2322,3634,2347,3608,2361,3600,2364,3598,2397,3594,2430,3590,2430,3573,2429,3555,2387,3528,2344,3501,2321,3491,2298,3481,2242,3451,2187,3420,2165,3407,2163,3407,2156,3407,"Q",2145,
3406,2121,3411,"Z"]],label:"Boun Tay District",shortLabel:"BT",labelPosition:[155.7,415.9],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
