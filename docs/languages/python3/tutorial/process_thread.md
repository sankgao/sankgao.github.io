---
title: 进程和线程
icon: process
date: 2023-06-02
category: Languages
tag:
    - Python
---

- **进程**：操作系统可以执行多个任务，进程就是任务，一个进程就相当于一个任务，是操作系统分配资源的最小单位。在 python 中，想要实现多任务可以使用进程来完成，进程是实现多任务的一种方式
- **线程**：进程的多个子任务就称之为线程，线程是进程的最小执行单位，一个进程可以有很多线程，每个线程执行的任务都不一样

## 多进程 multiprocessing 包

要想更多利用 CPU 资源，可以利用多进程，Python 多进程常用的包 `multiprocessing`，它拥有很多的功能。比如：子进程、通讯、共享、执行不同的形式等等。

### Process——进程类

`Process` 是 `multiprocessing` 里面的一个进程类，通过它就能实现多进程。

**语法格式：**`Process(target[, name[, args[, kwargs]]])`

- **target**：目标，在哪里新开进程让系统去执行，给系统一个目标
- **name**：进程的名字，您可以设置也可以不设置，默认是 `Process-N`，`N` 是从 `1,2,3…N`，系统默认从小到大取名
- **args** 和 **kwargs**：是参数，可用于传递到目标

Process 里面有很多方法，其中最常用的就是 `start()` 方法用于启动进程：`进程名.start()`

例如：在没有开启多进程时。

```python
import time


def music():
    # 执行 3 次
    for i in range(3):
        print("听音乐中...")

        # 延迟 0.2s，目的是让效果对比更明显一些
        time.sleep(0.2)


def movie():
    for i in range(3):
        print("看视频中...")

        time.sleep(0.2)


music()
movie()
print("主进程执行完毕")


# 输出结果
听音乐中...
听音乐中...
听音乐中...
看视频中...
看视频中...
看视频中...
主进程执行完毕
```

程序从上运行到下，逐行运行，`music()` 里面的三次循环没有执行完毕就不会执行 `movie()`，以及这两个函数如果没有执行完毕，就不会执行最后一行的 `print` 语句。

例如：开启多进程时。

```python
import time
import multiprocessing


def music():
    for i in range(3):
        print("听音乐中...")

        time.sleep(0.2)


def movie():
    for i in range(3):
        print("看视频中...")

        time.sleep(0.2)


# 解决 Windows 系统下调用包时的递归问题
if __name__ == "__main__":
    # 创建子进程
    music_process = multiprocessing.Process(target=music)
    movie_process = multiprocessing.Process(target=movie)

    # 启用进程
    music_process.start()
    movie_process.start()

    print("主进程执行完毕")


# 输出结果
主进程执行完毕
听音乐中...
看视频中...
听音乐中...
看视频中...
听音乐中...
看视频中...
```

代码运行时是有三个进程同时进行的，一个是从上往下执行的主进程，执行到 `print` 输出 **主进程执行完毕**，另外两个子进程去执行 `music()` 和 `movie()` 进程，从他们的执行速度来看，它们是同时在进行的，所以没有像刚才那样非要等其中一个函数里面的代码执行完成才开始第二个函数。

::: tip
代码中加入了一个 if 语句来判断 `__name__` 这个。因为在 Windows 系统下，`multiprocessing` 这个包会发生递归现象，就是会在 “导入模块—调用模块” 之间反复执行，可以把 if 语句去掉，把里面的代码全部放到外面来执行试试（报错），这是 Windows 系统下会发生的一个现象，mac、linux 等系统是不用加 if 来做判断的
:::

### 获取当前进程的编号

1. 获取当前进程的编号：

    需要用到一个 os 模块里面的 `getpid()` 方法。
    
    **语法格式**：`os.getpid()`

2. 获取当前进程的名字

    这里用的还是 `multiprocessing` 包，里面有个 `current_process()` 的方法。
    
    **语法格式**：`multiprocessing.current_process()`

3. 获取当前父进程（主进程）的编号

    子进程是属于哪个父进程。这个用的是 os 模块里面的 `getppid()`。
    
    **语法格式**：`os.getppid()`

例如：

```python
import time
import multiprocessing
import os


def music():
    print("music 子进程名字：", multiprocessing.current_process())
    print("music 子进程编号：", os.getpid())
    print("music 所属主进程的编号：", os.getppid())

    for i in range(3):
        print("听音乐中...")

        time.sleep(0.2)


def movie():
    print("movie 子进程名字：", multiprocessing.current_process())
    print("movie 子进程编号：", os.getpid())
    print("movie 所属主进程的编号：", os.getppid())

    for i in range(3):
        print("看视频中...")
        time.sleep(0.2)


if __name__ == "__main__":
    # 创建子进程
    music_process = multiprocessing.Process(target=music)
    movie_process = multiprocessing.Process(target=movie)

    # 启用进程
    music_process.start()
    movie_process.start()

    print("主进程编号：", os.getpid())


# 输出结果
主进程编号： 37956
music 子进程名字： <Process name='Process-1' parent=37956 started>
music 子进程编号： 44436
movie 子进程名字： <Process name='Process-2' parent=37956 started>
movie 子进程编号： 31024
music 所属主进程的编号： 37956
听音乐中...
movie 所属主进程的编号： 37956
看视频中...
听音乐中...
看视频中...
听音乐中...
看视频中...
```

## 多线程 Threading 模块

线程也同样可以进行多个任务。如果一个进程只有一个任务（主进程），那么也可以说是只有一个线程。

### 多线程 Thread 类

多线程常用的一个模块是 `threading`，里面有个 `Thread` 的类，跟前面多进程时用到的 `Process` 类差不多。

**语法格式：**`Thread(target=None, name=None, args=(), kwargs=None)`

- **target**：可执行目标
- **name**：线程的名字默认 `Thread-N`
- **args** 和 **kwargs**：目标参数

多线程开启的方法：`start()`

获取线程名字的方法：`threading.current_thread()`

例如：

```python
import time
import threading


def music(name, loop):
    for i in range(loop):
        print("听音乐：%s, 第 %s 次" % (name, i))

        time.sleep(0.2)


def movie(name, loop):
    for i in range(loop):
        print("看电影：%s, 第 %s 次" % (name, i))

        time.sleep(0.2)


if __name__ == "__main__":
    music_thread = threading.Thread(target=music, args=("最亲的人", 3))
    movie_thread = threading.Thread(target=movie, args=("唐探2", 3))

    music_thread.start()
    movie_thread.start()

    print("主线程执行完毕")


# 输出结果
听音乐：最亲的人, 第 0 次
看电影：唐探2, 第 0 次主线程执行完毕

看电影：唐探2, 第 1 次
听音乐：最亲的人, 第 1 次
听音乐：最亲的人, 第 2 次看电影：唐探2, 第 2 次
```

### 继承 Thread 类

除了用上面的方法实现多线程任务，还可以用继承类的方式去实现多线程。

通过多线程的方式，打印 “凉凉” 和 “头发没了” 各三次。例如：

```python
import time
import threading


class MyThread(threading.Thread):
    # 初始化
    def __init__(self, name):
        # 调用父类 Thread 的初始化方法
        super().__init__()

        # name 变成实例属性
        self.name = name

    def run(self):
        # 线程要做的事情
        for i in range(3):
            print(self.name)
            time.sleep(0.2)


# 实例化子线程
t1 = MyThread("凉凉")
t2 = MyThread("头发没了")

t1.start()
t2.start()


# 输出结果
凉凉
头发没了
凉凉头发没了

头发没了凉凉
```
