---
title: 颜色
icon: colors
date: 2023-05-19
category: Frontend
tag:
    - CSS3
---

## CSS 颜色

所有现代浏览器均支持以下 140 种颜色名称。

### 红色（Red）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FFA07A"></td>
    <td>lightsalmon（淡鲑鱼）</td>
    <td>#FFA07A</td>
    <td>rgb(255,160,122)</td>
  </tr>
  <tr>
    <td style="background-color:#FA8072"></td>
    <td>salmon（三文鱼）</td>
    <td>#FA8072</td>
    <td>rgb(250,128,114)</td>
  </tr>
  <tr>
    <td style="background-color:#E9967A"></td>
    <td>darksalmon（黑鲑鱼）</td>
    <td>#E9967A</td>
    <td>rgb(233,150,122)</td>
  </tr>
  <tr>
    <td style="background-color:#F08080"></td>
    <td>lightcoral（珊瑚色）</td>
    <td>#F08080</td>
    <td>rgb(240,128,128)</td>
  </tr>
  <tr>
    <td style="background-color:#CD5C5C"></td>
    <td>indianred（印度红）</td>
    <td>#CD5C5C</td>
    <td>rgb(205,92,92)</td>
  </tr>
  <tr>
    <td style="background-color:#DC143C"></td>
    <td>crimson（赤红）</td>
    <td>#DC143C</td>
    <td>rgb(220,20,60)</td>
  </tr>
  <tr>
    <td style="background-color:#B22222"></td>
    <td>firebrick（耐火砖）</td>
    <td>#B22222</td>
    <td>rgb(178,34,34)</td>
  </tr>
  <tr>
    <td style="background-color:#FF0000"></td>
    <td>red（红色）</td>
    <td>#FF0000</td>
    <td>rgb(255,0,0)</td>
  </tr>
  <tr>
    <td style="background-color:#8B0000"></td>
    <td>darkred（深红）</td>
    <td>#8B0000</td>
    <td>rgb(139,0,0)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 橙色（Orange）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FF7F50"></td>
    <td>coral（珊瑚）</td>
    <td>#FF7F50</td>
    <td>rgb(255,127,80)</td>
  </tr>
  <tr>
    <td style="background-color:#FF6347"></td>
    <td>tomato（番茄）</td>
    <td>#FF6347</td>
    <td>rgb(255,99,71)</td>
  </tr>
  <tr>
    <td style="background-color:#FF4500"></td>
    <td>orangered（橙红色）</td>
    <td>#FF4500</td>
    <td>rgb(255,69,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFD700"></td>
    <td>gold（金子）</td>
    <td>#FFD700</td>
    <td>rgb(255,215,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FFA500"></td>
    <td>orange（橙子）</td>
    <td>#FFA500</td>
    <td>rgb(255,165,0)</td>
  </tr>
  <tr>
    <td style="background-color:#B8860B"></td>
    <td>darkgoldenrod （暗金色）</td>
    <td>#B8860B</td>
    <td>rgb(255,165,0)</td>
  </tr>
  <tr>
    <td style="background-color:#FF8C00"></td>
    <td>darkorange（黑暗的）</td>
    <td>#DC143C</td>
    <td>rgb(255,140,​​0)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 黄色（Yellow）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FFFFE0"></td>
    <td>lightyellow（浅黄色）</td>
    <td>#FFFFE0</td>
    <td>rgb(255,255,224)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFACD"></td>
    <td>lemonchiffon（柠檬雪纺）</td>
    <td>#FFFACD</td>
    <td>rgb(255,250,205)</td>
  </tr>
  <tr>
    <td style="background-color:#FAFAD2"></td>
    <td>lightgoldenrodyellow（浅金色黄色）</td>
    <td>#FAFAD2</td>
    <td>rgb(250,250,210)</td>
  </tr>
  <tr>
    <td style="background-color:#FFEFD5"></td>
    <td>papayawhip（爱抚）</td>
    <td>#FFEFD5</td>
    <td>rgb(255,239,213)</td>
  </tr>
  <tr>
    <td style="background-color:#FFE4B5"></td>
    <td>moccasin（鹿皮鞋）</td>
    <td>#FFE4B5</td>
    <td>rgb(255,228,181)</td>
  </tr>
  <tr>
    <td style="background-color:#FFDAB9"></td>
    <td>peachpuff（桃花心）</td>
    <td>#FFDAB9</td>
    <td>rgb(255,218,185)</td>
  </tr>
  <tr>
    <td style="background-color:#EEE8AA"></td>
    <td>palegoldenrod（苍白的金棒）</td>
    <td>#EEE8AA</td>
    <td>rgb(238,232,170)</td>
  </tr>
  <tr>
    <td style="background-color:#F0E68C"></td>
    <td>khaki（卡其色）</td>
    <td>#F0E68C</td>
    <td>rgb(240,230,140)</td>
  </tr>
  <tr>
    <td style="background-color:#BDB76B"></td>
    <td>darkkhaki（深卡其色）</td>
    <td>#BDB76B</td>
    <td>rgb(189,183,107)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFF00"></td>
    <td>yellow（黄色）</td>
    <td>#FFFF00</td>
    <td>rgb(255,255,0)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 绿色（Green）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#7CFC00"></td>
    <td>lawngreen（草坪绿）</td>
    <td>#7CFC00</td>
    <td>rgb(124,252,0)</td>
  </tr>
  <tr>
    <td style="background-color:#7FFF00"></td>
    <td>chartreuse（黄绿色）</td>
    <td>#7FFF00</td>
    <td>rgb(127,255,0)</td>
  </tr>
  <tr>
    <td style="background-color:#32CD32"></td>
    <td>limegreen（石灰绿）</td>
    <td>#32CD32</td>
    <td>rgb(50,205,50)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF00"></td>
    <td>lime（酸橙）</td>
    <td>#00FF00</td>
    <td>rgb(0.255.0)</td>
  </tr>
  <tr>
    <td style="background-color:#228B22"></td>
    <td>forestgreen（森林绿）</td>
    <td>#228B22</td>
    <td>rgb(34,139,34)</td>
  </tr>
  <tr>
    <td style="background-color:#008000"></td>
    <td>green（绿色）</td>
    <td>#008000</td>
    <td>rgb(0,128,0)</td>
  </tr>
  <tr>
    <td style="background-color:#006400"></td>
    <td>darkgreen（深绿色）</td>
    <td>#006400</td>
    <td>rgb(0,100,0)</td>
  </tr>
  <tr>
    <td style="background-color:#ADFF2F"></td>
    <td>greenyellow（绿黄色）</td>
    <td>#ADFF2F</td>
    <td>rgb(173,255,47)</td>
  </tr>
  <tr>
    <td style="background-color:#9ACD32"></td>
    <td>yellowgreen（黄绿色）</td>
    <td>#9ACD32</td>
    <td>rgb(154,205,50)</td>
  </tr>
  <tr>
    <td style="background-color:#00FF7F"></td>
    <td>springgreen（春绿）</td>
    <td>#00FF7F</td>
    <td>rgb(0,255,127)</td>
  </tr>
  <tr>
    <td style="background-color:#00FA9A"></td>
    <td>mediumspringgreen（中春绿）</td>
    <td>#00FA9A</td>
    <td>rgb(0,250,154)</td>
  </tr>
  <tr>
    <td style="background-color:#90EE90"></td>
    <td>lightgreen（淡绿色）</td>
    <td>#90EE90</td>
    <td>rgb(144,238,144)</td>
  </tr>
  <tr>
    <td style="background-color:#98FB98"></td>
    <td>palegreen（浅绿色）</td>
    <td>#98FB98</td>
    <td>rgb(152,251,152)</td>
  </tr>
  <tr>
    <td style="background-color:#8FBC8F"></td>
    <td>darkseagreen（深海绿）</td>
    <td>#8FBC8F</td>
    <td>rgb(143,188,143)</td>
  </tr>
  <tr>
    <td style="background-color:#3CB371"></td>
    <td>mediumseagreen（中海绿）</td>
    <td>#3CB371</td>
    <td>rgb(60,179,113)</td>
  </tr>
  <tr>
    <td style="background-color:#2E8B57"></td>
    <td>seagreen（海绿色）</td>
    <td>#2E8B57</td>
    <td>rgb(46,139,87)</td>
  </tr>
  <tr>
    <td style="background-color:#808000"></td>
    <td>olive（橄榄）</td>
    <td>#808000</td>
    <td>rgb(128,128,0)</td>
  </tr>
  <tr>
    <td style="background-color:#556B2F"></td>
    <td>darkolivegreen（暗橄榄绿）</td>
    <td>#556B2F</td>
    <td>rgb(85,107,47)</td>
  </tr>
  <tr>
    <td style="background-color:#6B8E23"></td>
    <td>olivedrab（橄榄色）</td>
    <td>#6B8E23</td>
    <td>rgb(107,142,35)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 青色（Cyan）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#E0FFFF"></td>
    <td>lightcyan（浅青色）</td>
    <td>#E0FFFF</td>
    <td>rgb(224,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#00FFFF"></td>
    <td>cyan（青色）</td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#00FFFF"></td>
    <td>aqua（水色）</td>
    <td>#00FFFF</td>
    <td>rgb(0,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#7FFFD4"></td>
    <td>aquamarine（蓝晶）</td>
    <td>#7FFFD4</td>
    <td>rgb(127,255,212)</td>
  </tr>
  <tr>
    <td style="background-color:#66CDAA"></td>
    <td>mediumaquamarine（中等海蓝宝石）</td>
    <td>#66CDAA</td>
    <td>rgb(102,205,170)</td>
  </tr>
  <tr>
    <td style="background-color:#AFEEEE"></td>
    <td>paleturquoise（淡绿松石色）</td>
    <td>#AFEEEE</td>
    <td>rgb(175,238,238)</td>
  </tr>
  <tr>
    <td style="background-color:#40E0D0"></td>
    <td>turquoise（绿松石）</td>
    <td>#40E0D0</td>
    <td>rgb(64,224,208)</td>
  </tr>
  <tr>
    <td style="background-color:#48D1CC"></td>
    <td>mediumturquoise（中绿松石色）</td>
    <td>#48D1CC</td>
    <td>rgb(72,209,204)</td>
  </tr>
  <tr>
    <td style="background-color:#00CED1"></td>
    <td>darkturquoise（深绿松石色）</td>
    <td>#00CED1</td>
    <td>rgb(0,206,209)</td>
  </tr>
  <tr>
    <td style="background-color:#20B2AA"></td>
    <td>lightseagreen（浅海绿）</td>
    <td>#20B2AA</td>
    <td>rgb(32,178,170)</td>
  </tr>
  <tr>
    <td style="background-color:#5F9EA0"></td>
    <td>cadetblue（学员蓝）</td>
    <td>#5F9EA0</td>
    <td>rgb(95,158,160)</td>
  </tr>
  <tr>
    <td style="background-color:#008B8B"></td>
    <td>darkcyan（深青色）</td>
    <td>#008B8B</td>
    <td>rgb(0,139,139)</td>
  </tr>
  <tr>
    <td style="background-color:#008080"></td>
    <td>teal（蓝绿色）</td>
    <td>#008080</td>
    <td>rgb(0,128,128)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 蓝色（Blue）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#B0E0E6"></td>
    <td>powderblue（粉蓝色）</td>
    <td>#B0E0E6</td>
    <td>rgb(176,224,230)</td>
  </tr>
  <tr>
    <td style="background-color:#ADD8E6"></td>
    <td>lightblue（浅蓝色）</td>
    <td>#ADD8E6</td>
    <td>rgb(173,216,230)</td>
  </tr>
  <tr>
    <td style="background-color:#87CEFA"></td>
    <td>lightskyblue（浅天蓝）</td>
    <td>#87CEFA</td>
    <td>rgb(135,206,250)</td>
  </tr>
  <tr>
    <td style="background-color:#87CEEB"></td>
    <td>skyblue（天蓝色）</td>
    <td>#87CEEB</td>
    <td>rgb(135,206,235)</td>
  </tr>
  <tr>
    <td style="background-color:#00BFFF"></td>
    <td>deepskyblue（深天蓝）</td>
    <td>#00BFFF</td>
    <td>rgb(0,191,255)</td>
  </tr>
  <tr>
    <td style="background-color:#B0C4DE"></td>
    <td>lightsteelblue（浅钢蓝色）</td>
    <td>#B0C4DE</td>
    <td>rgb(176,196,222)</td>
  </tr>
  <tr>
    <td style="background-color:#1E90FF"></td>
    <td>dodgerblue（道奇蓝）</td>
    <td>#1E90FF</td>
    <td>rgb(30,144,255)</td>
  </tr>
  <tr>
    <td style="background-color:#6495ED"></td>
    <td>cornflowerblue（矢车菊蓝）</td>
    <td>#6495ED</td>
    <td>rgb(100,149,237)</td>
  </tr>
  <tr>
    <td style="background-color:#4682B4"></td>
    <td>steelblue（钢蓝）</td>
    <td>#4682B4</td>
    <td>rgb(70,130,180)</td>
  </tr>
  <tr>
    <td style="background-color:#4169E1"></td>
    <td>royalblue（宝蓝色）</td>
    <td>#4169E1</td>
    <td>rgb(65,105,225)</td>
  </tr>
  <tr>
    <td style="background-color:#0000FF"></td>
    <td>blue（蓝色）</td>
    <td>#0000FF</td>
    <td>rgb(0,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#0000CD"></td>
    <td>mediumblue（中蓝）</td>
    <td>#0000CD</td>
    <td>rgb(0,0,205)</td>
  </tr>
  <tr>
    <td style="background-color:#00008B"></td>
    <td>darkblue（深蓝）</td>
    <td>#00008B</td>
    <td>rgb(0,0,139)</td>
  </tr>
  <tr>
    <td style="background-color:#000080"></td>
    <td>navy（海军）</td>
    <td>#000080</td>
    <td>rgb(0,0,128)</td>
  </tr>
  <tr>
    <td style="background-color:#191970"></td>
    <td>midnightblue（午夜蓝）</td>
    <td>#191970</td>
    <td>rgb(25,25,112)</td>
  </tr>
  <tr>
    <td style="background-color:#7B68EE"></td>
    <td>mediumslateblue（中板蓝）</td>
    <td>#7B68EE</td>
    <td>rgb(123,104,238)</td>
  </tr>
  <tr>
    <td style="background-color:#6A5ACD"></td>
    <td>slateblue（石板蓝）</td>
    <td>#6A5ACD</td>
    <td>rgb(106,90,205)</td>
  </tr>
  <tr>
    <td style="background-color:#483D8B"></td>
    <td>darkslateblue（深石板蓝）</td>
    <td>#483D8B</td>
    <td>rgb(72,61,139)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 紫色（Purple）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#E6E6FA"></td>
    <td>lavender（薰衣草）</td>
    <td>#E6E6FA</td>
    <td>rgb(230,230,250)</td>
  </tr>
  <tr>
    <td style="background-color:#D8BFD8"></td>
    <td>thistle（蓟）</td>
    <td>#D8BFD8</td>
    <td>rgb(216,191,216)</td>
  </tr>
  <tr>
    <td style="background-color:#DDA0DD"></td>
    <td>plum（李子）</td>
    <td>#DDA0DD</td>
    <td>rgb(221,160,221)</td>
  </tr>
  <tr>
    <td style="background-color:#EE82EE"></td>
    <td>violet（紫色）</td>
    <td>#EE82EE</td>
    <td>rgb(238,130,238)</td>
  </tr>
  <tr>
    <td style="background-color:#DA70D6"></td>
    <td>orchid（兰花）</td>
    <td>#DA70D6</td>
    <td>rgb(218,112,214)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00FF"></td>
    <td>fuchsia（紫红色）</td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FF00FF"></td>
    <td>magenta（品红）</td>
    <td>#FF00FF</td>
    <td>rgb(255,0,255)</td>
  </tr>
  <tr>
    <td style="background-color:#BA55D3"></td>
    <td>mediumorchid（中等兰花）</td>
    <td>#BA55D3</td>
    <td>rgb(186,85,211)</td>
  </tr>
  <tr>
    <td style="background-color:#9370DB"></td>
    <td>mediumpurple（中紫色）</td>
    <td>#9370DB</td>
    <td>rgb(147,112,219)</td>
  </tr>
  <tr>
    <td style="background-color:#8A2BE2"></td>
    <td>blueviolet（紫罗兰色）</td>
    <td>#8A2BE2</td>
    <td>rgb(138,43,226)</td>
  </tr>
  <tr>
    <td style="background-color:#9400D3"></td>
    <td>darkviolet（暗紫色）</td>
    <td>#9400D3</td>
    <td>rgb(148,0,211)</td>
  </tr>
  <tr>
    <td style="background-color:#9932CC"></td>
    <td>darkorchid（需要）</td>
    <td>#9932CC</td>
    <td>rgb(153,50,204)</td>
  </tr>
  <tr>
    <td style="background-color:#8B008B"></td>
    <td>darkmagenta（深洋红色）</td>
    <td>#8B008B</td>
    <td>rgb(139,0,139)</td>
  </tr>
  <tr>
    <td style="background-color:#800080"></td>
    <td>purple（紫色）</td>
    <td>#800080</td>
    <td>rgb(128,0,128)</td>
  </tr>
  <tr>
    <td style="background-color:#4B0082"></td>
    <td>indigo（靛青）</td>
    <td>#4B0082</td>
    <td>rgb(75,0,130)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 粉红色（Pink）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FFC0CB"></td>
    <td>pink（粉色的）</td>
    <td>#FFC0CB</td>
    <td>rgb(255,192,203)</td>
  </tr>
  <tr>
    <td style="background-color:#FFB6C1"></td>
    <td>lightpink（浅粉色）</td>
    <td>#FFB6C1</td>
    <td>rgb(255,182,193)</td>
  </tr>
  <tr>
    <td style="background-color:#FF69B4"></td>
    <td>hotpink（亮粉色）</td>
    <td>#FF69B4</td>
    <td>rgb(255,105,180)</td>
  </tr>
  <tr>
    <td style="background-color:#FF1493"></td>
    <td>deeppink（深粉色）</td>
    <td>#FF1493</td>
    <td>rgb(255,20,147)</td>
  </tr>
  <tr>
    <td style="background-color:#DB7093"></td>
    <td>palevioletred（淡紫红色）</td>
    <td>#DB7093</td>
    <td>rgb(219,112,147)</td>
  </tr>
  <tr>
    <td style="background-color:#C71585"></td>
    <td>mediumvioletred（中紫红色）</td>
    <td>#C71585</td>
    <td>rgb(199,21,133)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 白色（White）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FFFFFF"></td>
    <td>white（白色的）</td>
    <td>#FFFFFF</td>
    <td>rgb(255,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFAFA"></td>
    <td>snow（雪）</td>
    <td>#FFFAFA</td>
    <td>rgb(255,250,250)</td>
  </tr>
  <tr>
    <td style="background-color:#F0FFF0"></td>
    <td>honeydew（甘露）</td>
    <td>#F0FFF0</td>
    <td>rgb(240,255,240)</td>
  </tr>
  <tr>
    <td style="background-color:#F5FFFA"></td>
    <td>mintcream（薄荷糖）</td>
    <td>#F5FFFA</td>
    <td>rgb(245,255,250)</td>
  </tr>
  <tr>
    <td style="background-color:#F0FFFF"></td>
    <td>azure（天蓝色）</td>
    <td>#F0FFFF</td>
    <td>rgb(240,255,255)</td>
  </tr>
  <tr>
    <td style="background-color:#F0F8FF"></td>
    <td>aliceblue（爱丽丝蓝）</td>
    <td>#F0F8FF</td>
    <td>rgb(240,248,255)</td>
  </tr>
  <tr>
    <td style="background-color:#F8F8FF"></td>
    <td>ghostwhite（幽灵白）</td>
    <td>#F8F8FF</td>
    <td>rgb(248,248,255)</td>
  </tr>
  <tr>
    <td style="background-color:#F5F5F5"></td>
    <td>whitesmoke（白色的烟）</td>
    <td>#F5F5F5</td>
    <td>rgb(245,245,245)</td>
  </tr>
  <tr>
    <td style="background-color:#FFF5EE"></td>
    <td>seashell（贝壳）</td>
    <td>#FFF5EE</td>
    <td>rgb(255,245,238)</td>
  </tr>
  <tr>
    <td style="background-color:#F5F5DC"></td>
    <td>beige（浅褐色的）</td>
    <td>#F5F5DC</td>
    <td>rgb(245,245,220)</td>
  </tr>
  <tr>
    <td style="background-color:#FDF5E6"></td>
    <td>oldlace（旧花边）</td>
    <td>#FDF5E6</td>
    <td>rgb(253,245,230)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFAF0"></td>
    <td>floralwhite（花白色）</td>
    <td>#FFFAF0</td>
    <td>rgb(255,250,240)</td>
  </tr>
  <tr>
    <td style="background-color:#FFFFF0"></td>
    <td>ivory（象牙）</td>
    <td>#FFFFF0</td>
    <td>rgb(255,255,240)</td>
  </tr>
  <tr>
    <td style="background-color:#FAEBD7"></td>
    <td>antiquewhite（古色古香的白色）</td>
    <td>#FAEBD7</td>
    <td>rgb(250,235,215)</td>
  </tr>
  <tr>
    <td style="background-color:#FAF0E6"></td>
    <td>linen（亚麻布）</td>
    <td>#FAF0E6</td>
    <td>rgb(250,240,230)</td>
  </tr>
  <tr>
    <td style="background-color:#FFF0F5"></td>
    <td>lavenderblush（薰衣草腮红）</td>
    <td>#FFF0F5</td>
    <td>rgb(255,240,245)</td>
  </tr>
  <tr>
    <td style="background-color:#FFE4E1"></td>
    <td>mistyrose（迷雾玫瑰）</td>
    <td>#FFE4E1</td>
    <td>rgb(255,228,225)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 灰色（Gray）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#DCDCDC"></td>
    <td>gainsboro（盖恩斯伯勒）</td>
    <td>#DCDCDC</td>
    <td>rgb(220,220,220)</td>
  </tr>
  <tr>
    <td style="background-color:#D3D3D3"></td>
    <td>lightgray（浅灰）</td>
    <td>#D3D3D3</td>
    <td>rgb(211,211,211)</td>
  </tr>
  <tr>
    <td style="background-color:#C0C0C0"></td>
    <td>silver（银）</td>
    <td>#C0C0C0</td>
    <td>rgb(192,192,192)</td>
  </tr>
  <tr>
    <td style="background-color:#A9A9A9"></td>
    <td>darkgray（深灰色）</td>
    <td>#A9A9A9</td>
    <td>rgb(169,169,169)</td>
  </tr>
  <tr>
    <td style="background-color:#808080"></td>
    <td>gray（灰色的）</td>
    <td>#808080</td>
    <td>rgb(128,128,128)</td>
  </tr>
  <tr>
    <td style="background-color:#696969"></td>
    <td>dimgray（暗灰色）</td>
    <td>#696969</td>
    <td>rgb(105,105,105)</td>
  </tr>
  <tr>
    <td style="background-color:#778899"></td>
    <td>lightslategray（浅色灰色）</td>
    <td>#778899</td>
    <td>rgb(119,136,153)</td>
  </tr>
  <tr>
    <td style="background-color:#708090"></td>
    <td>slategray（石板灰）</td>
    <td>#708090</td>
    <td>rgb(112,128,144)</td>
  </tr>
  <tr>
    <td style="background-color:#2F4F4F"></td>
    <td>darkslategray（深石板灰色）</td>
    <td>#2F4F4F</td>
    <td>rgb(47,79,79)</td>
  </tr>
  <tr>
    <td style="background-color:#000000"></td>
    <td>black（黑色的）</td>
    <td>#000000</td>
    <td>rgb(0,0,0)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

### 棕色（Brown）

::: normal-demo 演示

```html
<table id="customers">
  <tr>
    <th>颜色</th>
    <th>颜色名</th>
    <th>HEX 值</th>
    <th>RGB 值</th>
  </tr>
  <tr>
    <td style="background-color:#FFF8DC"></td>
    <td>cornsilk（玉米须）</td>
    <td>#FFF8DC</td>
    <td>rgb(255,248,220)</td>
  </tr>
  <tr>
    <td style="background-color:#FFEBCD"></td>
    <td>blanchedalmond（漂白杏仁）</td>
    <td>#FFEBCD</td>
    <td>rgb(255,235,205)</td>
  </tr>
  <tr>
    <td style="background-color:#FFE4C4"></td>
    <td>bisque（浓汤）</td>
    <td>#FFE4C4</td>
    <td>rgb(255,228,196)</td>
  </tr>
  <tr>
    <td style="background-color:#FFDEAD"></td>
    <td>navajowhite（纳瓦乔白）</td>
    <td>#FFDEAD</td>
    <td>rgb(255,222,173)</td>
  </tr>
  <tr>
    <td style="background-color:#F5DEB3"></td>
    <td>wheat（小麦）</td>
    <td>#F5DEB3</td>
    <td>rgb(245,222,179)</td>
  </tr>
  <tr>
    <td style="background-color:#DEB887"></td>
    <td>burlywood（伯莱伍德）</td>
    <td>#DEB887</td>
    <td>rgb(222,184,135)</td>
  </tr>
  <tr>
    <td style="background-color:#D2B48C"></td>
    <td>tan（棕褐色）</td>
    <td>#D2B48C</td>
    <td>rgb(210,180,140)</td>
  </tr>
  <tr>
    <td style="background-color:#BC8F8F"></td>
    <td>rosybrown（玫瑰棕）</td>
    <td>#BC8F8F</td>
    <td>rgb(188,143,143)</td>
  </tr>
  <tr>
    <td style="background-color:#F4A460"></td>
    <td>sandybrown（桑迪布朗）</td>
    <td>#F4A460</td>
    <td>rgb(244,164,96)</td>
  </tr>
  <tr>
    <td style="background-color:#DAA520"></td>
    <td>goldenrod（一枝黄花）</td>
    <td>#DAA520</td>
    <td>rgb(218,165,32)</td>
  </tr>
  <tr>
    <td style="background-color:#CD853F"></td>
    <td>peru（秘鲁）</td>
    <td>#CD853F</td>
    <td>rgb(205,133,63)</td>
  </tr>
  <tr>
    <td style="background-color:#D2691E"></td>
    <td>chocolate（巧克力）</td>
    <td>#D2691E</td>
    <td>rgb(210,105,30)</td>
  </tr>
  <tr>
    <td style="background-color:#8B4513"></td>
    <td>saddlebrown（鞍棕色）</td>
    <td>#8B4513</td>
    <td>rgb(139,69,19)</td>
  </tr>
  <tr>
    <td style="background-color:#A0522D"></td>
    <td>sienna（赭色）</td>
    <td>#A0522D</td>
    <td>rgb(160,82,45)</td>
  </tr>
  <tr>
    <td style="background-color:#A52A2A"></td>
    <td>brown（棕色的）</td>
    <td>#A52A2A</td>
    <td>rgb(165,42,42)</td>
  </tr>
  <tr>
    <td style="background-color:#800000"></td>
    <td>maroon（栗色）</td>
    <td>#800000</td>
    <td>rgb(128,0,0)</td>
  </tr>
</table>
```

```css
#customers {
  border-collapse: collapse;
  width: 100%;
}

#customers td, 
#customers th {
  border: 1px solid #ddd;
  text-align:center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
```

:::

## 合法颜色值

CSS 中的颜色可以通过以下方法指定：

- 十六进制颜色
- 带透明度的十六进制颜色
- RGB 颜色
- RGBA 颜色
- HSL 颜色
- HSLA 颜色
- 预定义或跨浏览器的颜色名称
- 使用 `currentcolor` 关键字

### 十六进制颜色

用 `#RRGGBB` 规定十六进制颜色，其中 `RR`（红色）、`GG`（绿色）和 `BB`（蓝色）十六进制整数指定颜色的成分（分量）。所有值必须在 `00` 到 `FF` 之间。

例如：`＃0000ff` 值呈现为蓝色，因为蓝色分量设置为最高值（`ff`），其他分量设置为 `00`。

::: normal-demo 演示

```html
<p id="p1">红色</p>
<p id="p2">绿色</p>
<p id="p3">蓝色</p>
```

```css
#p1 {
  background-color: #ff0000;
}

#p2 {
  background-color: #00ff00;
}

#p3 {
  background-color: #0000ff;
}
```

:::

### 带透明度的十六进制颜色

用 `#RRGGBB` 规定十六进制颜色。如需增加透明度，请在颜色最后添加两个额外的数字，所有值必须在 `00` 到 `FF` 之间。例如：

::: normal-demo 演示

```html
<p id="p1">红色</p>
<p id="p1a">带透明度的红色</p>
<p id="p2">绿色</p>
<p id="p2a">带透明度的绿色</p>
<p id="p3">蓝色</p>
<p id="p3a">带透明度的蓝色</p>
```

```css
#p1 {
  background-color: #ff0000;
}

#p1a {
  background-color: #ff000080;
}

#p2 {
  background-color: #00ff00;
}

#p2a {
  background-color: #00ff0080;
}

#p3 {
  background-color: #0000ff;
}

#p3a {
  background-color: #0000ff80;
}
```

:::

### RGB 颜色

RGB 颜色值由 `rgb()` 函数规定，语法：`rgb(red, green, blue)`。

每个参数（`red`, `green`, `blue`）定义颜色的强度，可以是 `0` 到 `255` 之间的整数或百分比值（从 `0%` 到 `100%`）。

例如：值 `rgb(0, 0, 255)` 或 `rgb(0%, 0%, 100%)` 呈现为蓝色，因为 `blue` 参数设置为其最高值（`255`），其他参数设置为 `0`。

::: normal-demo 演示

```html
<p id="p1">红色</p>
<p id="p2">绿色</p>
<p id="p3">蓝色</p>
```

```css
#p1 {
  background-color: rgb(255, 0, 0);
}

#p2 {
  background-color: rgb(0, 255, 0);
}

#p3 {
  background-color: rgb(0, 0, 255);
}
```

:::

### RGBA 颜色

`RGBA` 颜色值是 `RGB` 颜色值的扩展，它带有 `Alpha` 通道指定对象的不透明度。

`RGBA` 颜色通过 `rgba()` 函数规定，语法：`rgba(red, green, blue, alpha)`。

`alpha` 参数是介于 `0.0`（完全透明）和 `1.0`（完全不透明）之间的数字。例如：

::: normal-demo 演示

```html
<p id="p1">红色</p>
<p id="p1a">带 0.3 透明度的红色</p>
<p id="p2a">带 0.5 透明度的红色</p>
<p id="p3a">带 0.8 透明度的红色</p>
```

```css
#p1 {
  background-color: rgb(255, 0, 0);
}

#p1a {
  background-color: rgba(255, 0, 0, 0.3);
}

#p2a {
  background-color: rgba(255, 0, 0, 0.5);
}

#p3a {
  background-color: rgba(255, 0, 0, 0.8);
}
```

:::

### HSL 颜色

`HSL` 指的是色相（hue）、饱和度（saturation）和亮度（lightness），代表颜色的圆柱坐标表示。

使用 `hsl()` 函数指定 HSL 颜色值，该函数的语法：`hsl(hue, saturation, lightness)`

- **色相**：是色轮上的度数（从 `0` 到 `360`），`0`（或 `360`）是红色，`120` 是绿色，`240` 是蓝色
- **饱和度**：是一个百分比值，`0%` 表示灰色阴影，而 `100%` 是全彩色
- **亮度**：也是一个百分比，`0%` 是黑色，`100%` 是白色

::: normal-demo 演示

```html
<p id="p1">绿色</p>
<p id="p2">浅绿色</p>
<p id="p3">深绿色</p>
<p id="p4">柔绿色</p>
```

```css
#p1 {
  background-color: hsl(120, 100%, 50%);
}

#p2 {
  background-color: hsl(120, 100%, 75%);
}

#p3 {
  background-color: hsl(120, 100%, 25%);
}

#p4 {
  background-color: hsl(120, 60%, 70%);
}

```

:::

### HSLA 颜色

`HSLA` 颜色值是 `HSL` 颜色值的扩展，它带有 `Alpha` 通道，指定对象的不透明度。

`HSLA` 颜色值由 `hsla()` 函数指定，该函数的语法：`hsla(hue, saturation, lightness, alpha)`

`alpha` 参数是介于 `0.0`（完全透明）和 `1.0`（完全不透明）之间的数字。

::: normal-demo 演示

```html
<p id="p1">绿色</p>
<p id="p1a">绿色</p>
<p id="p1a1">绿色</p>
<p id="p1a2">绿色</p>
```

```css
#p1 {
  background-color: hsla(120, 100%, 50%);
}

#p1a {
  background-color: hsla(120, 100%, 50%, 0.3);
}

#p1a1 {
  background-color: hsla(120, 100%, 50%, 0.5);
}

#p1a2 {
  background-color: hsla(120, 100%, 50%, 0.8);
}

```

:::

### 预定义或跨浏览器的颜色名称

`HTML` 和 `CSS` 颜色规范中预定义了 `140` 个颜色名称。

例如：`red`、`green`、`blue` 等。

::: normal-demo 演示

```html
<p id="p1">红色</p>
<p id="p2">绿色</p>
<p id="p3">蓝色</p>
```

```css
#p1 {
  background-color: red;
}

#p2 {
  background-color: green;
}

#p3 {
  background-color: blue;
}
```

:::

### currentcolor 关键字

`currentcolor` 关键字引用元素的 `color` 属性值。

例如：以下 `<div>` 元素的边框颜色将为蓝色，因为 `<div>` 元素的文本颜色为蓝色。

::: normal-demo 演示

```html
<div id="myDIV">
  这个 div 元素有蓝色文本颜色和蓝色边框。
</div>
```

```css
#myDIV {
  color: blue;
  border: 10px solid currentcolor;
}
```

:::

