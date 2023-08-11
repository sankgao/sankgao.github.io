---
title: 文件及目录
icon: directory
date: 2023-06-02
category: Languages
tag:
    - Python
---

## 文件

在文本文件的内部以字符的形式存储数据，字符是有编码的。例如：`GBK`（简体中文）、`UTF-8` 等。在二进制文件的内部以字节的形式存储数据，没有编码的概念，二进制文件较为常用。例如：Windows 中的 `exe`、图片（`jpg`、`png` 等）以及 `Word`、`Excel` 和 `PPT` 等文件。

::: tip 打开关闭文件
在 Python 中，内置了文件（File）对象，在使用文件对象时，首先需要通过内置的 `open()` 方法创建一个文件对象，然后通过该对象提供的方法进行一些基本文件操作
:::

### 创建和打开文件

可以使用 `open()` 函数创建或者打开指定文件并创建文件对象。

**语法格式**：`file = open(filename[, mode[, buffering[, encoding[, errors[, newline[, closefd[, opener]]]]]]])`

- **file**：被创建的文件对象
- **filename**：要创建或打开的文件名称，需要用单引号或双引号括起来。可以使用相对路径也可以使用绝对路径
- **mode**：可选参数，指定文件的打开模式。默认的打开模式为只读（`r`）
- **buffering**：可选参数，指定读写文件的缓冲模式，值为 `0` 表示不缓存；值为 `1` 表示缓存；如果大于 `1`，则表示缓冲区的大小。默认为缓存模式
- **encoding**：指定文件编码。默认为 `None`。encoding 参数仅可在采用文本方式（即 mode 值为 `t`）读写数据的情况下有效，二进制方式下不可指定。常用的有 `utf-8`、`ascii`、`gbk` 等
- **errors**：指定在文本文件发生编码错误时如何处理。默认为 `None`。仅当 mode 参数采用文本方式时有效，二进制方式下不可指定。常用的可选值有 `strict`、`ignore`、`replace`、`surrogateescape`、`xmlcharrefreplace`、`backslashreplace`、`namereplace` 等。推荐参数为 `ignore` 表示在遇到编码错误时忽略该错误，程序继续执行
- **newline**：设置换行符。默认为 `None`。可选值包括 `None`、`\r`、`\n`、`\r\n`。
- **closefd**：控制传入的 file 参数类型。默认为 `True`，当为 `True` 时，file 参数可以是表示文件路径的字符串，也可以是文件描述符，当为 `False` 时，file 参数只能是文件描述符，传入字符串会报错

**mode 参数列表如下：**

|  参数  |  说明  |
|  :----:  |  :----  |
|  **t** |  文本模式（默认）  |
|  **x** |  写模式，新建一个文件，如果文件存在，则报错  |
|  **b** |  二进制模式  |
|  **+** |  打开一个文件进行更新（读写模式）  |
|  **U** |  通用换行模式（不推荐）  |
|  **r** |  只读模式打开文件，文件的指针将会放在文件的开头。文件必须存在  |
|  **rb** |  只读模式以二进制格式打开文件，文件的指针将会放在文件的开头，一般用于非文本文件。例如：图片、声音等。文件必须存在  |
|  **r+**  |  读写模式打开文件，写入新的内容覆盖原有内容，文件的指针将会放在文件的开头。文件必须存在  |
|  **rb+**  |  读写模式以二进制格式打开文件，文件的指针将会放在文件的开头，一般用于非文本文件。例如：图片、声音等。文件必须存在  |
|  **w** |  只写模式打开文件。文件如果存在，则将其覆盖，否则创建新文件  |
|  **wb** |  只写模式以二进制格式打开文件，一般用于非文本文件。例如：图片、声音等。文件如果存在，则将其覆盖，否则创建新文件  |
|  **w+**  |  读写模式打开文件，先清空原有内容，再写入内容。文件如果存在，则将其覆盖，否则创建新文件  |
|  **wb+**  |  读写模式以二进制格式打开文件，一般用于非文本文件。例如：图片、声音等。文件如果存在，则将其覆盖，否则创建新文件  |
|  **a** |  追加模式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **ab** |  追加模式以二进制格式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **a+**  |  读写、追加模式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |
|  **ab+**  |  读写、追加模式以二进制格式打开文件。如果该文件存在，文件指针将会放在文件的末尾，否则，创建新文件写入  |

例如：打开一个不存在的文件。

```python
file = open('test.txt', 'w')

print("打开文件", file)


# 输出结果
打开文件 <_io.TextIOWrapper name='test.txt' mode='w' encoding='cp936'>
```

例如：以二进制形式打开文件。

```python
file = open('picture.png', 'rb')

print(file)  # 输出结果：<_io.BufferedReader name='picture.png'>
```

例如：打开文件时指定编码方式。

```python
file = open('test.txt', 'r', encoding='utf-8')

print(file)


# 输出结果
<_io.TextIOWrapper name='test.txt' mode='r' encoding='utf-8'>
```

### 关闭文件

可以使用 `close()` 方法对打开的文件进行关闭，以免对文件造成不必要的破坏。

**语法格式**：`file.close()`

- **file**：为打开的文件对象

例如：

```python
file = open('test.txt', 'r', encoding='utf-8')

print(file)

file.close()


# 输出结果
<_io.TextIOWrapper name='test.txt' mode='r' encoding='utf-8'>
```

::: tip
`close()` 方法先刷新缓冲区中还没有写入的信息，然后再关闭文件，这样可以将没有写入到文件的内容写入到文件中，在关闭文件后，便不能再进行写入操作了
:::

### with as 语句

如果在打开文件时抛出异常，那么将导致文件不能被及时关闭。使用 `with as` 语句在处理文件时，无论是否抛出异常，都能保证 `with` 语句执行完成后关闭已打开的文件。

**语法格式：**

```python
with expression as target:
    with-body
```

- **expression**：指定一个表达式，可以是打开文件的 `open()` 函数
- **target**：指定一个变量，并且将 `expression` 的结果保存到该变量中
- **with-body**：指定 `with` 语句体，可以是执行 `with` 语句后相关的一些操作语句

例如：

```python
with open('test.txt', 'r') as file:
    print("打开文件")  # 输出结果：打开文件
```

### finally 语句

对文件的操作往往会抛出异常，为了保证对文件的操作无论是正常结束还异常结束，都能够关闭文件，应该将对 `close()` 方法的调用放在异常处理的 `finally` 代码块中。例如：

```python
try:
    file = open('test.txt', 'r')
    print("打开文件")
except FileNotFoundError as e:
    print("文件不存在，请先创建文件")
except OSError as e:
    print("处理异常")
finally:
    if file is not None:
        file.close()
        print("关闭文件！")


# 输出结果
打开文件
关闭文件！
```

## 读写文本文件

- **read([size])**：从文件中读取字符串，`size` 限制读取字符串的个数，默认为全部读取
- **readline([size])**：在读取到换行符或文件末尾时返回单行字符串。如果已经到文件末尾，则返回一个空字符串
- **readlines([size])**：读取文件数据到一个字符串列表中，每行数据都是列表的一个元素
- **write(s)**：将字符串 s 写入文件中，并返回写入的字符个数
- **writelines(lines)**：向文件中写入一个字符串列表，默认没有分隔符
- **flush()**：刷新写缓冲区，在文件没有关闭的情况下将数据写入文件中

### 写入文件内容

在 Python 中对文件对象提供了 `write()` 方法，可以向文件中写入内容。

**语法格式**：`file.write(string)`

- **file**：指定要打开的文件对象
- **string**：指定要写入的内容

::: tip
在调用 `write()` 方法向文件中写入内容的前提是在打开文件时，指定打开模式为 `w`（可写）或 `a`（追加），否则会报错
:::

使用 `w` 读写模式，写入内容。例如：

```python
file = open('test.txt', 'w')
file.write("Hello, World!\n")

print("写入内容")  # 输出结果：写入内容

file.close()
```

::: warning
在写入文件后，一定要调用 `close()` 方法关闭文件，否则写入的内容不会保存到文件中。这是因为当写入文件内容时，操作系统不会立刻把数据写入到磁盘中，而是先缓存起来，只有调用 `close()` 方法时才会将数据写入到磁盘中
:::

使用 `a` 追加模式写入内容。例如：

```python
file = open('test.txt', 'a')
file.write("Hello, Python!")

print("写入内容")  # 输出结果：写入内容

file.close()
```

### 读取文件

使用文件对象的 `read()` 方法读取指定个数的字符。

**语法格式**：`file.read([size])`

- **file**：指定要读取的文件对象
- **size**：指定要读取字符的个数，如果省略，则读取所有内容

::: tip
在调用 `read()` 方法读取文件内容的前提时在打开文件时，指定打开模式为 `r`（只读）或 `r+`（读写），否则会报错
:::

例如：

```python
with open('test.txt', 'r') as file:
    mystr = file.read()
    print(mystr)


# 输出结果
Hello, World!
Hello, Python!
```

使用文件对象的 `seek()` 方法将文件的指针移动到只读位置，然后再应用 `read()` 方法读取，可以读取文件部分内容。

**语法格式**：`file.seek(offset[, whence])`

- **file**：指定已经打开的文件对象
- **offset**：指定移动的字符个数，具体位置与 whence 参数有关
- **whence**：指定从什么位置开始计算。默认为 `0`，值为 `0` 表示从文件头开始计算，值为 `1` 表示从当前位置开始计算，值为 `2` 表示从文件末尾开始计算

例如：

```python
with open('test.txt', 'r') as file:
    file.seek(6)
    mystr = file.read(10)
    print(mystr)


# 输出结果
 World!
He
```

::: tip
对于 whence 参数，如果在打开文件时，没有使用 `b` 模式（即 `rb`），那么只允许从文件头开始计算相对位置，从文件末尾计算时就会抛出异常

在使用 `seek()` 方法时，如果采用 `GBK` 编码，那么 `offset` 的值是按一个汉字（包括中文标点符号）占两个字符计算，采用 `UTF-8` 编码，则一个汉字占三个字符，不过无论采用何种编码英文和数字都是按一个字符计算
:::

使用文件对象的 `readline()` 方法用于每次读取一行数据。

**语法格式**：`file.readline()`

- **file**：指定已经打开的文件对象

例如：

```python
with open('test.txt', 'r') as file:
    num = 0
    while True:
        num += 1
        line = file.readline()
        if line == '':
            break
        print(num, line)


# 输出结果
1 Hello, World!

2 Hello, Python!
```

使用文件对象的 `readlines()` 方法用于读取全部行，返回的是一个字符串列表，每行内容为一个元素。

**语法格式**：`file.readlines()`

- **file**：指定要打开的文件对象

例如：

```python
with open('test.txt', 'r') as file:
    lines = file.readlines()
    print(lines)  # 输出结果：['Hello, World!\n', 'Hello, Python!']
```

### 文件的对象属性

有三个 **常用的方法** 可用于查看文件对象的属性：

- **closed**：如果文件对象已关闭，返回 `True`，否则返回 `False`
- **mode**：返回文件对象的访问模式
- **name**：返回文件的名称

例如：

```python
f = open("test.txt", 'a+')
f.write("aaa")
f.close()

print(f.closed)  # 输出结果：True
print(f.name)  # 输出结果：test.txt
print(f.mode)  # 输出结果：a+
```

## 目录操作

目录也称文件夹，用于分层保存文件。通过使用 `os` 内置模块和 `os.path` 子模块实现。

常用的目录操作主要有判断目录是否存在、创建目录、删除目录和遍历目录等。

::: tip
os 模块是 Python 内置模块与操作系统和文件系统相关，执行结果通常与操作系统有关
:::

### os 模块和 os.path 子模块

**常用的变量有以下几个：**

- **os.name**：用于获取操作系统。例如：`nt`
- **os.linesep**：用于获取当前操作系统上的换行符。例如：` `
- **os.sep**：用于获取当前操作系统所使用的路径分隔符。例如：`\`
- **os.rename(原文件名，新的文件名)**：文件重命名
- **os.remove(文件名)**：删除文件

**os 模块提供的与目录相关的函数：**

|  函数  |  说明  |
|  :----:  |  :----  |
|  **getcwd()**  |  返回当前的工作目录  |
|  **listdir(path)**  |  返回指定路径下的文件和目录信息  |
|  **mkdir(path[, mode])**  |  创建目录  |
|  **makedirs(path1/path2...[, mode])**  |  创建多级目录  |
|  **rmdir(path)**  |  删除目录  |
|  **removedirs(path1/path2...)**  |  删除多级目录  |
|  **chdir(path)**  |  把 path 设置为当前工作目录  |
|  **walk(top[, topdown[, onerror]])**  |  遍历目录树，该方法返回一个元组，包括所有路径名、所有目录列表和文件列表 3 个元素  |

**os.path 子模块提供的与目录相关的函数：**

|  函数  |  说明  |
|  :----:  |  :----  |
|  **abspath(path)**  |  用于获取文件或目录的绝对路径  |
|  **exists(path)**  |  用于判断目录或文件是否存在，如果存在则返回 True，否则返回 False  |
|  **join(path, name)**  |  将目录与目录或文件名拼接起来  |
|  **splitext()**  |  分离文件名和扩展名  |
|  **basename(path)**  |  从一个目录中提前文件名  |
|  **dirname(path)**  |  从一个路径中提前文件路径，不包括文件名  |
|  **isdir(path)**  |  用于判断是否为有效路径  |

### 路径

用于定位一个文件或者目录的字符串被称为一个路径。一般分为两种路径：**相对路径** 和 **绝对路径。**

- **相对路径**

    当前工作目录是指当前文件所在的目录，通过 `getcwd()` 函数获取当前工作目录。例如：

    ```python
    import os

    print(os.getcwd())  # 输出结果：E:\SourceCode\Python\PythonProject
    ```

    相对路径就是依赖于当前工作目录。在当前目录下有一个子目录 demo，并且在该子目录下保存文件 demo.txt，打开 demo.txt。例如：

    ```python
    import os

    with open(r"demo\demo.txt", 'r') as file:
        print(file.read())  # 输出结果：Hello, World!
    ```

- **绝对路径**

    绝对路径指在使用文件时指定文件的实际路径，从根目录开始。通过 `abspath(path)` 函数获取文件的绝对路径。例如：

    ```python
    import os

    # r"demo\demo.txt" 表示要获取文件的相对路径
    print(os.path.abspath(r"demo\demo.txt"))


    # 输出结果 
    E:\SourceCode\Python\PythonProject\demo\demo.txt
    ```

### 拼接路径

将两个路径或者多个路径拼接到一起组成一个新的路径，通过 `join()` 函数实现。例如：

```python
import os

print(os.path.join("E:\SourceCode\Python\PythonProject", "demo\demo.txt"))
print(os.path.join("E:\SourceCode\Python\PythonProject", "demo\demo.txt", "E:\\test", "demo.txt"))


# 输出结果
E:\SourceCode\Python\PythonProject\demo\demo.txt
E:\test\demo.txt
```

::: tip
在拼接路径时，并不会检测路径是否真实存在  

如果要拼接的路径中，没有一个绝对路径，那么最后拼接出来的是一个相对路径  

如果要拼接的路径中，存在多个绝对路径，那么以从左到右为序最后一次出现的绝对路径为准，该路径之前的参数都将被忽略
:::

### 判断目录或文件是否存在

通过使用 `exists()` 函数判断目录或文件是否存在。例如：

```python
import os

print(os.path.exists("E:/SourceCode/Python"))

if not os.path.exists("E:/SourceCode/Python"):
    os.mkdir("E:/SourceCode/Python")
    print("目录不存在，创建成功")
else:
    print("目录存在")


# 输出结果
True
目录存在
```

### 创建目录

通过使用 `mkdir()` 函数创建一级目录。例如：

```python
import os

os.mkdir("demo")
```

通过使用 `makedirs()` 函数创建多级目录。例如：

```python
import os

os.makedirs("demo/test/aaa")
```

### 删除目录

通过使用 `rmdir()` 函数删除目录，只有当要删除的目录为空时才起作用。例如：

```python
import os

os.rmdir("demo/test/aaa")
```

通过使用 `rmtree()` 函数删除目录，可以删除不是空目录。例如：

```python
import os

os.rmtree("demo/test")
```

### 遍历目录

通过使用 `walk()` 函数遍历目录。

**语法格式**：`os.walk(top[, topdown[, onerror[, followlinks]]])`

- **top**：指定要遍历的根目录
- **topdown**：指定遍历的顺序。默认为 `True`，如果值为 `True` 表示自上而下遍历；如果值为 `False` 表示自下而上遍历
- **onerror**：指定错误处理方式。默认忽略
- **followlinks**：默认为 `False`，如果值为 `True` 表示指定在支持的系统上访问由符号链接指向的目录；如果值为 `False` 表示指定不支持由符号链接指向的目录

`os.walk` 函数返回 3 个元素（`dirpath`、`dirnames`、`filenames`）的元组生成器对象：

- **dirpath**：表示当前遍历的路径，是一个字符串
- **dirnames**：表示当前路径下包含的子目录，是一个列表
- **filenames**：表示当前路径下包含的文件，是一个列表

例如：

```python
import os

mytuples = os.walk("E:/SourceCode/Python/PythonProject")

for mytuple in mytuples:
    print(mytuple)


# 输出结果
('E:/SourceCode/Python/PythonProject\\settings', ['__pycache__'], ['size.py', '__init__.py'])


path = "E:/SourceCode/Python/PythonProject"

for root, dirs, files in os.walk(path, topdown=True):
    for name in dirs:
        print("dir：", os.path.join(root, name))
    for name in files:
        print("file：", os.path.join(root, name))


# 输出结果
dir：E:/SourceCode/Python/PythonProject\settings
dir: E:/SourceCode/Python/PythonProject\settings\__pycache__
file: E:/SourceCode/Python/PythonProject\settings\size.py
file: E:/SourceCode/Python/PythonProject\settings\__init__.py
```

## 高级文件操作

os 模块提供的与文件相关的函数：

|  函数  |  说明  |
|  :----:  |  :----  |
|  **access(path, accessmode)**  |  获取对文件是否有指定的访问权限（读取、写入、执行），`accessmode` 的值是 `R_OK`（读取）、`W_OK`（写入）、`X_OK`（执行）或 `F_OK`（存在），如果有指定权限则返回 `1`，否则返回 `0`  |
|  **chmod(path, mode)**  |  修改 path 指定文件的访问权限  |
|  **remove(path)**  |  删除 path 指定的文件路径  |
|  **rename(src, dst)**  |  将文件或目录 src 重命名为 dst  |
|  **stat(path)**  |  返回 path 指定的文件信息  |
|  **startfile(path[, operation])**  |  使用关联的应用程序打开 path 指定的文件  |

### 删除文件

通过使用 `remove()` 函数删除文件，如果要删除的文件不存在会报错。

**语法格式**：`os.remove(path)`

- **path**：为要删除的文件路径，可以是相对路径，也可以是绝对路径

例如：删除当前工作目录下的 `test.txt` 文件。

```python
import os

os.remove('test.txt')
```

### 重命名文件或目录

通过使用 `rename()` 函数重命名文件或目录。

**语法格式**：`os.rename(src, dst)`

- **src**：指定要进行重命名的文件或目录
- **dst**：指定重命名后的文件或目录

例如：

```python
import os

src = "test.txt"
dst = "test01.txt"

if os.path.exists(src):
    os.rename(src, dst)
    print("文件重命名成功！")
else:
    print("文件重命名失败！")
```

::: tip
使用 `rename()` 函数重命名目录时，只能修改最后一级的目录名称，否则会报错
:::

### 获取文件基本信息

通过使用 `stat()` 函数可以获取文件的基本信息（文件的最后一次访问时间、最后一次修改时间、文件大小等）。

**语法格式**：`os.stat(path)`

- **path**：要获取文件基本信息的路径，可以是相对路径，也可以是绝对路径

`os.stat()` 函数的返回值是一个对象，通过访问这些对象属性获取文件基本信息，对象属性如下：

|  属性  |  说明  |
|  :----:  |  :----  |
|  **st_mode**  |  保护模式  |
|  **st_dev**  |  设备名  |
|  **st_ino**  |  索引号  |
|  **st_uid**  |  用户 ID  |
|  **st_nlink**  |  硬链接号（被链接数目）  |
|  **st_gid**  |  组 ID  |
|  **st_size**  |  文件大小，单位为字节  |
|  **st_atime**  |  最后一次访问时间  |
|  **st_mtime**  |  最后一次修改时间  |
|  **st_ctime**  |  最后一次状态变化的时间  |

例如：

```python
import os

fileinfo = os.stat("test.txt")

print("文件完整路径：", os.path.abspath("test.txt"))
print("索引号：", fileinfo.st_ino)
print("设备名：", fileinfo.st_dev)
print("文件大小：", fileinfo.st_size)
print("最后一次访问时间：", fileinfo.st_atime)
print("最后一次修改时间：", fileinfo.st_mtime)
print("最后一次状态变化时间：", fileinfo.st_ctime)


# 输出结果
文件完整路径： E:\SourceCode\Python\PythonProject\test.txt
索引号： 8725724278072824
设备名： 48482355
文件大小： 29
最后一次访问时间： 1685673633.471428
最后一次修改时间： 1685673156.536702
最后一次状态变化时间： 1668585771.569891
```

为了让上面的显示更加直观，需要对数值进行格式化。例如：

```python
import os


def formattime(longtime):
    """
    功能：格式化日期时间
    :param longtime: 要格式化的时间
    :return:
    """
    import time

    return time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(longtime))


def formatbyte(number):
    """
    功能：格式化文件大小
    :param number: 要格式化的字节数
    :return:
    """
    for (scale, label) in [((1024 * 1024 * 1024), 'GB'), ((1024 * 1024), 'GB'), (1024, 'GB')]:
        # 文件大小大于或等于 1 KB
        if number >= scale:
            return "%.2f %s" % ((number * 1.0 / scale), label)
        # 文件大小为 1 字节
        elif number == 1:
            return "1 字节"
        # 文件大小小于 1 KB
        else:
            byte = "%.2f" % (number or 0)
    # 去掉结尾的 .00 并且加上单位 “字节”
    return (byte[:-3] if byte.endswith('.00') else byte) + " 字节"


if __name__ == '__main__':
    fileinfo = os.stat("test.txt")

    print("文件完整路径：", os.path.abspath("test.txt"))
    print("索引号：", fileinfo.st_ino)
    print("设备名：", fileinfo.st_dev) 
    print("文件大小：", formatbyte(fileinfo.st_size))
    print("最后一次访问时间：", formattime(fileinfo.st_atime))
    print("最后一次修改时间：", formattime(fileinfo.st_mtime))
    print("最后一次状态变化时间：", formattime(fileinfo.st_ctime))


# 输出结果
文件完整路径： E:\SourceCode\Python\PythonProject\test.txt
索引号： 8725724278072824
设备名： 48482355
文件大小： 29 字节
最后一次访问时间： 2023-06-02 10:40:33
最后一次修改时间： 2023-06-02 10:32:36
最后一次状态变化时间： 2022-11-16 16:02:51
```

