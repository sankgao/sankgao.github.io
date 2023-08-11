---
title: 面向对象程序设计
icon: object
date: 2023-06-01
category: Languages
tag:
    - Python
---

## 概述

**类** 和 **对象** 都是面向对象中的重要概念。面向对象（Object Oriented）的英文缩写是 `OO`，它是一种设计思想。从 20 世纪 60 年代提出面向对象的概念到现在，它已经发展成为一种比较成熟的编程思想，并且逐步成为目前软件开发领域的主流技术。

面向对象中的对象（object），通常是指客观世界中存在的对象，具有唯一性，对象之间各不相同，各有各的特点，每一个对象都有自己的运动规律和内部状态；对象与对象之间又是可以相互联系、相互作用的，每个对象都有自己的属性和行为。

### 对象

对象是一种抽象概念，表示任意存在的事物。世间万物皆对象！对象是事物存在的实体。

通常将对象分为两个部分：

- **静态对象**：静态对象指的是对象 **属性**，任何对象都具备自身属性，这些属性不仅是客观存在的，而且是不能忽略的。例如：人的性别
- **动态对象**：动态对象指的是对象 **行为**， 即对象执行的动作。例如：人可以跑步

类相当于一个模板，依据这样的模块来创建对象，就是类的实例化，所以对象也被称为 **实例。**

### 类

类是封装对象的属性和行为的载体，反过来说具有属性和行为的一类实体被称为类。在类中，可以定义每个对象共有的属性和方法。

### 面向对象程序设计的特定

具有三大基本特征：

- **封装**：将对象的属性和行为封装起来的载体就是类，类通常会对客户隐藏其实现的细节，这就是封装的思想。这种封装思想保证了类内部数据结构的完整性，使用该类的用户不能直接看到类中的数据结构，只能执行类允许公开的数据，这样就避免了外部对内部数据的影响，提高了程序的可维护性
- **继承**：继承是实现重复利用的重要手段，子类通过继承复用了父类的属性和行为的同时又添加了子类特有的属性和行为
- **多态**：将父类对象应用于子类的特征就是多态

## 类的定义和使用

在 Python 中，类表示具有相同属性和方法的对象的集合。在使用类时，需要先定义类，然后再创建类的实例，通过类的实例就可以访问类中的属性和行为。

### 定义类

使用 `class` 关键字来实现定义类。

**语法格式：**

```python
class ClassName:
    """类的帮助信息"""
    statement
```

- **ClassName**：指定类名，一般使用首字母大写的格式，这种命名方法也称为 “驼峰式命名法”
- **"""类的帮助信息"""**：指定类的说明文档
- **statement**：指定类体，主要由类变量（或类成员）、方法和属性等定义语句组成。在编程时若不想马上编写某些代码，又不想有语法错误，可以使用 **pass 语句** 占位，pass 语句只用于维护程序结构的完整

例如：

```python
class Dog:
    pass
```

### 创建类的实例

`class` 语句本身并不创建该类的任何实例，在类定义完成以后创建类的实例（即实例化该类的对象）。

**语法格式**：`ClassName([parameter[, parameter,[...]]])`

- **ClassName**：指定具体的类名
- **[parameter[, parameter,[...]]]**：可选参数，如果创建类时，没有创建 `__init__()` 方法或者 `__init__()` 方法只有一个 `self` 参数时，`parameter` 可以省略

例如：

```python
dog = Dog()
print(dog())


# 输出结果
<__main__.Dog object at 0x000001DDBE67B310>。dog 是 Dog 类的实例对象
```

### 创建 \_\_init\_\_() 方法

创建类后，可以手动创建一个 `__init__()` 方法，这种方法就是 **构造方法**。该方法是一个特殊的方法，每当创建一个类的新实例时，Python 都会自动执行它。`__init__()` 方法必须包含一个 `self` 参数，并且必须是第一个参数。`self` 参数是一个指向实例本身的引用，用于访问类中属性和方法。在方法调用时会自动传递实际参数 `self`，因此当 `__init__()` 方法只有一个参数时，在创建类的实例时，就不需要指定实际参数了。例如：

```python
class Dog:
    # 构造方法
    def __init__(self, name, age):
        self.name = name
        self.age = age


# 创建实例化对象，调用构造方法
dog = Dog("球球", 2)

print("我们家的狗狗叫：{0}，{1} 岁了。".format(dog.name, dog.age))


# 输出结果
我们家的狗狗叫：球球，2 岁了。
```

### 访问限制

为了保证类内部的某些属性或方法不被外部所访问，可以在属性或方法名前面添加单下划线 `_`、双下划线 `__`、或首尾加双下划线 `__`，从而限制访问权限，作用如下：

- **单下划线 _**：表示 protected（保护）类型的成员，只允许类本身和子类进行访问，不能使用 `from module import *` 语句导入

    创建 `Swan` 类，定义保护属性 `_neck_swan`，并使用 `__init__()` 方法访问该属性，例如：

    ```python
    class Swan:
        _neck_swan = "天鹅的脖子很长"

        def __init__(self):
            print("__init__：", Swan._neck_swan)
    
    swan = Swan()
    print("直接访问：", swan._neck_swan)


    # 输出结果
    __init__： 天鹅的脖子很长
    直接访问： 天鹅的脖子很长
    ```

- **双下划线 __**：表示 private（私有）类型的成员，只允许定义该方法的类本身进行访问，而且也不能通过类的实例进行访问，但是可以使用 **类的实例名._类名__xx** 方式访问

    创建 `Swan` 类，定义私有属性 `__neck_swan`，并使用 `__init__()` 方法访问该属性，例如：

    ```python
    class Swan:
        __neck_swan = "天鹅的脖子很长"

        def __init__(self):
            print("__init__：", Swan.__neck_swan)
    
    swan = Swan()
    print("加入类名访问：", swan._Swan__neck_swan)
    print("直接访问：", swan.__neck_swan)


    # 输出结果
    __init__： 天鹅的脖子很长
    加入类名访问： 天鹅的脖子很长
    AttributeError: 'Swan' object has no attribute '__neck_swan'。“Swan” 对象没有属性 “__neck_Swan”
    ```

- **首尾加双下划线 __**：表示定义特殊方法

## 类的成员

**类的成员：**

```text
                          （类的成员）
            ╭┈┈┈┈┈┈┈┈┈┈┈┬┈┈┈┈┈┈┴┈┈┈┈┈┈┈┬┈┈┈┈┈┈┈┈┈┈┈┈╮
       （成员变量） （构造方法）    （成员方法）    （属性）
     ╭┈┈┈┈┈┈┴┈┈┈┈┈┈╮            ╭┈┈┈┈┈┈┴┈┈┈┈┈┈╮
（实例变量）    （类变量）   （实例方法）    （类方法）
```

**类的成员解释：**

- **成员变量**：保存了类或对象的数据
- **构造方法**：是一种特殊的函数，用于初始化类的成员变量
- **成员方法**：是在类中定义的函数
- **属性**：是对类进行封装而提供的特殊方法

::: tip
实例变量和实例方法属于对象，通过对象调用；类变量和类方法属于类，通过类调用
:::

### 实例变量

实例变量是对象个体特有的 **数据**，以 `self` 为前缀的变量都可供类中的所有方法使用，还可以通过类的任何实例来访问这些变量。实例变量通过 **实例对象.实例变量** 形式访问。例如：

```python
class Dog:
    # 构造方法
    def __init__(self, name, age):
        self.name = name
        self.age = age


# 创建实例化对象，调用构造方法
dog = Dog("球球", 2)

print("我们家的狗狗叫：{0}，{1} 岁了。".format(dog.name, dog.age))


# 输出结果
我们家的狗狗叫：球球，2 岁了。
```

### 实例方法

实例方法与实例变量一样，都是某个实例（或对象）个体特有的方法。定义实例方法时，它的第一个参数也应该是 `self`，这会将当前实例与该方法绑定起来，说明该方法属于实例，在调用方法时不需要传入 `self`，类似与构造方法。实例方法通过 **实例对象.实例方法** 形式访问。例如：

```python
class Dog:
    # 构造方法
    def __init__(self, name, age, sex="雌性"):
        self.name = name
        self.age = age
        self.sex = sex

    # 实例方法
    def run(self):
        print("{}在跑...".format(self.name))

    # 实例方法
    def speak(self, sound):
        print("{}在叫，{}！".format(self.name, sound))


dog = Dog("球球", 2)
dog.run()  # 输出结果：球球在跑...
dog.speak("汪 汪 汪")  # 输出结果：球球在叫，汪 汪 汪！
```

### 类变量

类变量是属于类的变量，不属于单个对象。类变量通过 **类名.类变量** 形式访问。例如：

```python
class Account:
    interest_rate = 0.0568

    def __init__(self, owner, amount):
        self.owner = owner
        self.amount = amount


account = Account('Tony', 800000.0)

print("账户名：{0}".format(account.owner))  # 输出结果：账户名：Tony
print("账户金额：{}".format(account.amount))  # 输出结果：账户金额：800000.0
print("利率：{}".format(Account.interest_rate))  # 输出结果：利率：0.0568
```

### 类方法

类方法与类变量类似，属于类不属于个体实例，在定义类方法时，它的第一个参数不是 `self`，而是类本身。类方法通过 **类名.类方法** 形式访问

定义类方法需要以装饰器 `@` 符号开头修饰函数、方法和类，用来约束它们。例如：

```python
class Account:
    interest_rate = 0.0668

    def __init__(self, owner, amount):
        self.owner = owner
        self.amount = amount

    # 类方法，cls 表示类自身（即 Account 类），可用 Account 代替
    @classmethod
    def interest_by(cls, amt):
        return cls.interest_rate * amt


interest = Account.interest_by(12000.0)

print("计算利息：{0:.4f}".format(interest))  # 输出结果：计算利息：801.6000
```

::: tip
类方法可用访问类变量和其它类方法，但不能访问其它实例方法和实例变量
:::

## 封装性

封装性是面向对象重要的基本特征之一。封装隐藏了对象的内部细节，只保留有限的对外接口，外部调用者不用关心对象的内部细节，使操作对象变得简单。

### 私有变量

为了防止外部调用者随意存取类的内部数据（成员变量），内部数据会被封装为 **私有变量**。外部调用者只能通过方法调用私有变量。

默认情况下，Python 中的变量是公有的，可以在类的外部访问它们，如果想让它们成为私有变量，则在变量前加上双下划线 `__` 即可。例如：

```python
class Account:
    # 定义私有变量
    __interest_rate = 0.0568

    def __init__(self, owner, amount):
        self.owner = owner
        # 定义私有变量
        self.__amount = amount

    def desc(self):
        # 在类的内部可以访问私有变量
        print("{0} 金额：{1} 利率：{2}".format(self.owner, self.__amount, Account.__interest_rate))


account = Account('Tony', 800000.0)
account.desc()

print("账户名：{}".format(account.owner))
print("账户金额：{}".format(account.__amount))
print("利率：{}".format(Account.__interest_rate))


# 输出结果
Tony 金额：800000.0 利率：0.0568
账户名：Tony
AttributeError: 'Account' object has no attribute '__amount'。“Account” 对象没有 “__amount” 属性
AttributeError: type object 'Account' has no attribute '__interest_rate'。类型对象 “Account” 没有属性 “__interest_rate”
```

::: tip
在类的外部不可以访问私有变量
:::

### 私有方法

私有方法与私有变量的封装是类似的，在方法前面加上双下划线 `__` 就是私有方法了。例如：

```python
class Account:
    __interest_rate = 0.0568

    def __init__(self, owner, amount):
        self.owner = owner
        self.__amount = amount

    # 定义私有方法
    def __get_info(self):
        return "{0} 金额：{1} 利率：{2}".format(self.owner, self.__amount, Account.__interest_rate)

    def desc(self):
        # 在类的内部可以调用私有方法
        print(self.__get_info())


account = Account('Tony', 800000.0)
account.desc()
account.__get_info()


# 输出结果
Tony 金额：800000.0 利率：0.0568
AttributeError: 'Account' object has no attribute '__get_info'。“Account” 对象没有属性 “__get_info”
```

::: tip
在类的外部不可以调用私有方法
:::

### 使用属性

为了实现对象的封装，在一个类中不应该有公有的成员变量，这些成员变量应该被设计为私有的，然后通过公有的 `set`（赋值）和 `get`（取值）方法访问。例如：

```python
class Dog:
    def __init__(self, name, age, sex="雌性"):
        self.name = name
        self.__age = age

    def run(self):
        print("{}在跑...".format(self.name))

    # 定义 get() 方法，返回私有实例变量 __age
    def get_age(self):
        return self.__age

    # 定义 set() 方法，通过 age 参数更新私有实例变量 __age
    def set_age(self, age):
        self.__age = age


dog = Dog("球球", 2)
print("狗狗的年龄：{}".format(dog.get_age()))  # 输出结果：狗狗的年龄：2

dog.set_age(3)
print("修改后狗狗的年龄：{}".format(dog.get_age()))  # 输出结果：修改后狗狗的年龄：3
```

当外部调用者通过两个公有方法访问被封装的私有变量时，比较麻烦。这时可以在类中定义属性，属性可以替代 `get()` 和 `set()` 这两个公有方法，在调用时比较简单。

- 属性通过 **实例对象.属性名** 形式访问
- 属性赋值通过 **实例对象.属性名** 形式赋值

例如：

```python
class Dog:
    def __init__(self, name, age, sex="雌性"):
        self.name = name
        # 私有变量 __age，对应的属性名应该去除前面双下划线之后的名称即 age
        self.__age = age

    def run(self):
        print("{}在跑...".format(self.name))

    # 类方法
    @property
    # 定义 age 属性的 get() 方法，使用 @property 装饰器进行修饰，方法名就是属性名即 age
    def age(self):
        return self.__age

    # 类方法
    @age.setter
    # 定义 age 属性的 set() 方法，使用 @age.setter 装饰器进行修饰，方法名就是属性名即 age
    def age(self, age):
        self.__age = age


dog = Dog("球球", 2)
print("狗狗的年龄：{}".format(dog.age))  # 输出结果：狗狗的年龄：2

dog.age = 3
print("修改后狗狗的年龄：{}".format(dog.age))  # 输出结果：修改后狗狗的年龄：3
```

::: tip
属性在本质上就是两个方法，在方法前添加上装饰器使得方法成为属性。属性使用起来类似于公有变量，可以在赋值符 `=` 左边或右边，左边被赋值，右边取值
:::

## 继承性

继承性也是面向对象重要的基本特性之一。在程序设计中实现继承，表示这个类拥有它所继承的类的所有公有成员或受保护成员，在面向对象编程中，被继承的类称为 **父类**，继承的新类称为 **子类。**

### 继承

子类继承父类，在类的定义语句中，类名右侧使用一对小括号指定它的父类就可以了。

**语法格式：**

```python
class ClassName(baseclasslist):
    """类的帮助信息"""
    statement
```

- **ClassName**：指定类名
- **baseclasslist**：指定要继承的父类，如果有多个，类名之间用逗号 `,` 分隔
- **statement**：指定类体，主要由类变量（类成员）、方法和属性等定义语句组成

例如：

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        return "动物的名字：{}".format(self.name)

    def move(self):
        print("动一动...")


class Cat(Animal):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age


cat = Cat('Tom', 2)
cat.move()  # 输出结果：动一动...
print(cat.show_info())  # 输出结果：动物的名字：Tom
```

::: tip
子类继承父类时，只将父类公有的成员变量和方法才可以被继承
:::

### 多继承

在 Python 中，当子类继承多个父类时，如果在多个父类中有相同的成员方法或成员变量，则子类优先继承左边父类中的成员方法或成员变量，从左到右继承级别从高到低。例如：

```python
class Horse:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        return "马的名字：{}".format(self.name)

    def run(self):
        print("马跑...")


class Donkey:
    def __int__(self, name):
        self.name = name

    def show_info(self):
        return "驴的名字：{}".format(self.name)

    def run(self):
        print("驴跑...")

    def roll(self):
        print("驴打滚...")


class Mule(Horse, Donkey):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age


m = Mule("骡宝莉", 1)
m.run()  # 输出结果：马跑...
m.roll()  # 输出结果：驴打滚...
print(m.show_info())  # 输出结果：马的名字：骡宝莉
```

### 方法重写

如果子类的方法名与父类的方法名相同，则在这种情况下，子类的方法会重写（Override）父类的同名方法。例如：

```python
class Horse:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        return "马的名字：{}".format(self.name)

    def run(self):
        print("马跑...")


class Donkey:
    def __init__(self, name):
        self.name = name

    def show_info(self):
        return "驴的名字：{}".format(self.name)

    def run(self):
        print("驴跑...")

    def roll(self):
        print("驴打滚...")


class Mule(Horse, Donkey):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age

    def show_info(self):
        return "骡：{}，{} 岁了".format(self.name, self.age)


m = Mule("骡宝莉", 1)
m.run()  # 输出结果：马跑...
m.roll()  # 输出结果：驴打滚...
print(m.show_info())  # 输出结果：骡：骡宝莉，1 岁了
```

## 多态性

多态性也是面向对象重要的基本特性之一。“多态” 指对象可以表现出多种形态。

### 继承与多态

在多个子类继承父类，并重写父类方法后，这些子类所创建的对象之间就是多态的，这些对象采用不同的方式实现父类方法。例如：

```python
class Animal:
    def speak(self):
        print("动物叫，但不指定是哪种动物叫！")


class Dog(Animal):
    def speak(self):
        print("小狗：汪汪汪叫...")


class Cat(Animal):
    def speak(self):
        print("小猫：喵喵喵叫...")


an01 = Dog()
an02 = Cat()
an01.speak()  # 输出结果：小狗：汪汪汪叫...
an02.speak()  # 输出结果：小猫：喵喵喵叫...
```

### 鸭子类型测试与多态

Python 的多态性更加灵活，支持 **鸭子类型测试**。鸭子类型测试是指：若看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟可以称为鸭子。

由于支持鸭子类型测试，所以 Python 解释器不检查发生多态的对象是否继承了同一个父类，只要它们有相同的行为（方法），它们之间就是多态的。

例如：定义一个函数 `start()`，它接收具有 `speak()` 方法的对象。

```python
def start(obj):
    obj.speak()


class Animal:
    def speak(self):
        print("动物叫，但不指定是哪种动物叫！")


class Dog(Animal):
    def speak(self):
        print("小狗：汪汪汪叫...")


class Cat(Animal):
    def speak(self):
        print("小猫：喵喵喵叫...")


class Car(Animal):
    def speak(self):
        print("小汽车：嘀嘀叫...")


start(Dog())  # 输出结果：小狗：汪汪汪叫...
start(Cat())  # 输出结果：小猫：喵喵喵叫...
start(Car())  # 输出结果：小汽车：嘀嘀叫...
```