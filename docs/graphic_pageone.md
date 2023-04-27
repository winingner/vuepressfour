---
sidebarDepth: 2
---

# 图形界面 - 设置

参照版本： 

## 简介

图形界面主要用来展示数据。

操作逻辑与Windows的 **画图** 相似，可以通过鼠标 点击、拖动 的方式构建展示页面。

可以在这里用 **文字**、**表格**、**图表** 等形式展示数据，也可以 **创建页面**、**切换页面** 在多个页面中展示数据。

页面位置： **配置** - **用户界面** - **设置**。

![初始界面](/assets/img/graphicpage/001.png)

## 操作流程

按流程为 **打开或新建页面** 、**修改页面和控件** 、**保存与运行页面** 。

* **打开或新建页面**（选一个）

  * **打开页面**： 点击左上角 **【打开】**  图标按钮，将弹出 **打开** 弹窗，鼠标选择页面如screen_0，点击蓝色 **打开页面** 按钮，将打开所选页面。

    ![图形界面 - 打开页面](/assets/img/graphicpage/42114.png)

  * **新建页面**： 点击左上角 **【打开】**  图标按钮，将弹出 **打开** 弹窗，选择 **新建页面** 标签，点击 **新建页面** 蓝色按钮，将新建一个黑色页面。

    ![图形界面 - 新建页面](/assets/img/graphicpage/420120.png)

* **修改页面和控件**

  分为 **修改页面** 、 **创建和修改控件** 。

  * **修改页面**： 点击黑色页面，在右侧设置页面属性([详情](graphic_pageone.md#页面属性配置))。

  * **创建和修改控件**： 点击左侧的控件工具，然后在页面内点击、拖动、松开,可创建控件。使用左侧 **指针工具** 可以选中控件查看其属性、拖动控件、按下 **delete** 删除控件，在右侧可修改属性([详情](graphic_pageone.md#工具属性配置))、修改对齐([详情](graphic_pageone.md#工具对齐设置))。 

* **保存与运行页面**

  * **保存页面**： 点击右上角 **【保存】** 图标按钮，将出现 **另存为** 弹窗，可设置页面类型与名称，点击确定；如果是保存过的页面，再次点击 **【保存】** 图标按钮，将直接保存。

  * **运行页面**： 点击右上角 **【运行】** 图标按钮，可查看页面运行效果，需要修改则返回 **UI组态页面**（网页标签名称为 UI组态 ），进行修改，再依次点击右上角 **【保存】** 、**【运行】** 图标按钮，查看修改，直到页面无问题。

  ![图形界面 - 新建页面](/assets/img/graphicpage/4201206.png)

## 页面结构

* **中部**：  页面在中部灰色区内展示。

* **中上**： 是**页面管理区**，详细见 [页面管理](graphic_pageone.md#页面管理)。

   * **中上左侧**： **【打开】**  图标按钮，用于 打开、导入、删除或新建文件。**导航** 可用于 **切换** 或 **关闭** 页面。

   * **中上右侧**： **【保存】** 图标按钮用于 **保存** 文件； **【运行】** 图标按钮用于展示页面。

* **左侧**： 是 **工具栏**。

  具体有指针、点、线、圆、矩形、文字、图片、输入框、按钮、开关、表格、图表、地图、树状图、页面嵌入、视频(萤石云)、视频(微控RTSP视频服务)2、回放视频(微控RTSP视频服务)、自定义工具，详细见 [工具属性配置](graphic_pageone.md#工具属性配置)。

* **右侧**： 是 **属性栏和对齐**。

   * **属性栏**： 有两列，第一列是属性名称，第二列可以设置属性,详细设置见 [页面属性配置](graphic_pageone.md#页面属性配置) 和 [工具属性配置](graphic_pageone.md#工具属性配置)。

   * **对齐**： 可以调整控件位置，详细设置见 [工具对齐设置](graphic_pageone.md#工具对齐设置)。

## 页面配置

### 页面管理

  点击左上角的 **【打开】**  图标按钮,会弹出 **打开** 窗口。
 
  ![图形界面 - 打开1](/assets/img/graphicpage/000.png)
 
  打开窗口有三个标签： **打开页面**、**新建页面**、**本地页面**。

* **新建页面**

  选择 **新建页面标签** ，点击 **新建页面** 按钮。

  ![图形界面 - 新建1](/assets/img/graphicpage/004.png)
 
  新建后的页面
 
  ![图形界面 - 新建2](/assets/img/graphicpage/001.png)

* **打开页面**

  在默认的打开窗口，如果保存过页面，将有页签，点击页签（灰色框），点击 **打开页面** 按钮。

  ![图形界面 - 打开页面](/assets/img/graphicpage/42114.png)

* **页面导入**

  点击 **本地页面** 标签，点击选择 **选择文件** 按钮，打开后，点击 **导入页面** 按钮。

  ![图形界面 - 新建3](/assets/img/graphicpage/008.png)

* **删除页面**

  **打开** 窗口中，在选中页面标签时，弹窗里 **灰色框** 有三个图标，功能分别是 **设置为主页** 、 **设置为登录页**、 **删除页面**，点击 **删除页面** 可以实现删除效果。

  ![图形界面 - 打开2](/assets/img/graphicpage/007.png)

* **保存**

  直接点击 **【保存】** 图标按钮，未保存过将弹出 **另存为** 窗口，可设置类型与名称，确定保存；保存过将直接保存到线上。

  ![图形界面 - 新建3](/assets/img/graphicpage/0001.png)

  将鼠标移动到页面右上角的 **【保存】** 图标按钮上，会出现下拉框 里面有 **发布、另存为、保存到本地** 选项。

     * **另存为**： 将弹出 **另存为** 弹窗，可设置类型与名称。

     * **保存到本地**： 将页面以 **.wk.page** 的格式直接保存到本地。

     * **发布**： 具有提示作用。

* **运行**

  可以预览页面。

### 页面属性配置

**打开页面** 或 **新建页面** (步骤见 [页面管理](graphic_pageone.md#页面管理))后，右侧属性是 **页面属性**： 

* **名称**： 可修改的页面名称，在打开页面时选择的页签名称。

* **标题**： 运行页面后网页标签的名称。

* **宽高**： 页面的宽度与高度。

* **宽度自适应**： 选择宽度自适应，依次点击 **【保存】** 、 **【运行】** 图标按钮，页面宽度 **等于** 浏览器展示界面宽度，高度将等比放大。

  ![图形界面 - 宽度自适应1](/assets/img/graphicpage/009.png)

* **高度自适应**： 页面高度 **等于** 浏览器展示界面高度，宽度将等比放大。

* **背景颜色**：点击背景颜色设置，会弹出 **选择颜色** 窗口，可以直接在色板中选择颜色或设置颜色编码，点击确定完成设置。

  ![图形界面 - 背景颜色](/assets/img/graphicpage/011.png)

* **背景图片**： 设置背景图片，会弹出 **选择图片** 窗口，点击 **选择文件** 按钮，然后点击 **【上传】**、**【刷新】** 图标按钮，在下方的列表里选择已经上传的图片，如果列表中有自己需要的图片可以不用上传，点击确定可以完成设置。

  如果要删除已经上传的图片，选择要删除的图片，点击 **【删除】** 图标按钮，将上传的图片删除，点击确定完成设置。

  ![图形界面 - 背景图片](/assets/img/graphicpage/012.png)

* **图片大小** 设置会弹出下拉框： 

  * **原大小**： 以图片本身大小展示到页面中。

  * **适应屏幕**： 图片宽高将进行等比例缩放，以适应屏幕，往往无法充满屏幕。

  * **覆盖屏幕**： 以图片的短边为基准进行缩放，缩放后 **图片短边的长度** 等于短边所对应容器边的长度，**图片长边** 缩放后多余的部分进行去除。

  * **拉伸**： 直接对图片进行宽高拉伸，以适应页面容器，容易使图片变形。

* **图片重复** 设置会弹出下拉框： 

  * **水平和垂直**： 页面内水平和垂直方向上,根据图片大小和页面的剩余空间,进行重复排列。

  * **水平**： 页面内水平方向上,根据图片大小和页面的水平剩余空间,进行重复排列。

  * **垂直**： 页面内垂直方向上,根据图片大小和页面的垂直剩余空间,进行重复排列。

  * **不重复**： 图片不进行重复排列。

* **图片位置**： 设置会弹出下拉框，选项位置有上左、上中、上右等，会根据图片和页面的大小安排位置。一般在图片较小时可以很好的展示。

* **刷新频率**： 屏幕每秒画面被刷新的次数，刷新频率默认为1000，可以设置。

* **加载事件**： 每次打开页面时进行的一次加载所执行的事件。

* **点击事件**： 点击页面所执行的事件。

### 页面操作 

* **创建控件**

  点击所需控件，然后在中部页面中，点击鼠标左键，拖动，松开，成功创建控件。

* **删除控件**

  点击页面中的控件，按键 **BackSpace** 或 **Delete**，会弹出 确定要删除控件的弹出框，选择确定。

* **修改控件**

  使用指针工具，选择控件，可以在右侧属性和对齐中修改控件。

* **移动控件**

  选择指针工具，鼠标直接点击控件不松，拖动到合适位置，松开。

* **复制控件**

  点击页面中的控件，**Ctrl + C** ,成功复制所选控件。

* **粘贴控件**

  **Ctrl + V**

* **剪切控件**

  点击页面中的控件，**Ctrl + X**，即可剪切所选控件。

* **撤销**

  **Ctrl + Z**

* **保存（另存、导出、发布）**

  直接保存 **Ctrl + S** 或 鼠标移动到 页面管理的右侧 **【保存】** 图标按钮上，会出现下拉框，里面有 

     * **另存**： 可以保存为线上文件。

     * **导出**： 即 **保存到本地**，可以直接以 **wk.page文件** 的格式保存到本地。

     * **发布**： 发布到线上，具有提示作用。

* **预览**

  **F5** 可以直接运行。或者鼠标点击 页面管理的右侧 **【运行】** 图标按钮上，也可运行。

* **切换或关闭页面**

  在界面的中上位置，有导航，可以选择以切换页面，点击叉号可关闭页面。

## 工具属性配置

### 指针

  指针可以对页面中的工具框选或点选，从而对工具进行复制、粘贴、删除、剪切、移动等操作。

  ![图形界面 - 指针](/assets/img/graphicpage/013.png)

### 点

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  设置点x = 100 ,y = 100,这里的x是点到y轴的垂直距离,y是点到x轴的垂直距离。

  ![图形界面 - 点](/assets/img/graphicpage/019.png)

* **z**： 用于控制控件先后,有些类似z-index层级。

  设置蓝点z为11，设置红点z为10,蓝点将遮住红点。

  ![图形界面 - 点](/assets/img/graphicpage/018.png)

* **大小**： 设置点的大小，点就像缩小的圆。

  点原大小10

  ![图形界面 - 点](/assets/img/graphicpage/014.png)

  设置点大小为100后，相当于放大了点的半径。

  ![图形界面 - 点](/assets/img/graphicpage/015.png)

* **填充颜色**： 设置点本身的颜色为蓝色。

  ![图形界面 - 点](/assets/img/graphicpage/015.png)

* **边框宽度**： 边框是点边缘轮廓线,边框宽度即轮廓线粗细。

* **边框颜色**： 设置点的边框颜色。

  需要先设置边框宽度才可以看到边框颜色。

  如设置边框宽度为3。再设置边框颜色为红色，红色的圆环部分即边框。

  ![图形界面 - 边框颜色](/assets/img/graphicpage/017.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 线

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **x1,y1**： 线段一端点的的坐标。

  现有线段控件。

  ![图形界面 - 线](/assets/img/graphicpage/020.png)

  改变 x1 = 0 , y1 = 0 后

  ![图形界面 - 线](/assets/img/graphicpage/021.png)

* **x2,y2**： 线段另端点的的坐标,与x1,y1同理。

* **z**： 用于控制控件先后,有些类似z-index层级,可以参考 [点z属性](graphic_pageone.md#点) 效果。

* **颜色**： 线段的颜色。

  ![图形界面 - 线](/assets/img/graphicpage/020.png)

* **线宽**： 线段的粗细。
 
  以前线宽为2，现在设置线宽为10，线段变粗。

  ![图形界面 - 线](/assets/img/graphicpage/023.png)

* **虚线间隔**： 决定线段间断程度，虚线间隔越小,里面的线越密集,虚线间隔越大,里面的线越稀疏。

  ![图形界面 - 线](/assets/img/graphicpage/024.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 圆

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级。效果可以参考 [点z属性](graphic_pageone.md#点)  的设置。

* **宽**： 图中指针选中圆后显示的矩形框的宽，水平最长距离。

* **高**： 图中指针选中圆后显示的矩形框的高，垂直方向最长距离，当宽高相同时圆为正圆。

* **填充颜色**： 圆本身的颜色,设置为蓝色。

  ![图形界面 - 圆](/assets/img/graphicpage/0025.png)

* **边框颜色**： 圆轮廓线的颜色，设置边框颜色为红色，设置边框宽度为3。

  ![图形界面 - 圆](/assets/img/graphicpage/0026.png)
 
* **边框宽度**： 圆轮廓线的粗细程度。

* **虚线间隔**： 是圆轮廓线的间隔，设置虚线间隔为3。

  ![图形界面 - 圆](/assets/img/graphicpage/025.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 矩形

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级。可以参考 [点z属性](graphic_pageone.md#点) 的效果。

* **宽**： 矩形的宽度。

* **高**： 矩形的高度。

* **圆角半径**： 在一定程度上表示矩形四角转为圆弧的程度，圆角半径越大四角向内凹陷的越大。

  ![图形界面 - 矩形1](/assets/img/graphicpage/026.png)

* **填充颜色**： 设置矩形的颜色。
   
  设置填充颜色为蓝色

  ![图形界面 - 矩形2](/assets/img/graphicpage/027.png)

* **边框颜色**： 矩形轮廓线的颜色，设置边框宽度为3，边框颜色为红色。

  ![图形界面 - 矩形3](/assets/img/graphicpage/028.png)

* **边框宽度**： 矩形轮廓线宽度。

* **虚线间隔**： 矩形轮廓线成为虚线后的间断程度，设置为3。

  ![图形界面 - 矩形4](/assets/img/graphicpage/029.png)
   
* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 文字

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级。可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 文本框宽度，默认是auto，如果不设置值，输入字时将一直沿横向排列，不会换行。

* **高**： 文本框高度，默认是auto。

* **文字**： 可以设置文本内容。

* **方向**： 改变文本框的方向 **横向**、**纵向** ，其中的文字排列方向变了。如果是字母，字母的排列和朝向将发生变化，将字体颜色设置为白色#fff。

  开始状态

  ![图形界面 - 文字](/assets/img/graphicpage/030.png)

  改变方向后,文字的方向改变,字母的朝向改变。

  ![图形界面 - 文字](/assets/img/graphicpage/031.png)

* **文本对齐**： 可以设置文本框内文字的对齐方式，可以为 **左对齐**、**右对齐**、**局中对齐**。

  可以先设置文本框的 **宽** 与 **高**。

  设置为左对齐(默认)

  ![图形界面 - 文字](/assets/img/graphicpage/032.png)

  设置为右对齐

  ![图形界面 - 文字](/assets/img/graphicpage/033.png)

  设置为居中对齐

  ![图形界面 - 文字](/assets/img/graphicpage/034.png)

* **文本颜色**： 设置文本颜色，弹出选择颜色窗口,设置文本颜色为红色。

  ![图形界面 - 文字](/assets/img/graphicpage/0037.png)

* **字号**： 字的大小。

* **粗体**： 字体的粗细。

* **行高**：可以设置文本行基线间的距离，简单来说行高是指文字尺寸与行距之间的和。

* **背景颜色**： 设置背景颜色，弹出窗口进行颜色选择，设置为白色。
   
  ![图形界面 - 文字](/assets/img/graphicpage/036.png)

* **边框宽度**： 文本框的粗细。

  需要设置边框颜色，如为红色,设置边框宽度为6。

  ![图形界面 - 文字](/assets/img/graphicpage/037.png)

* **边框样式**： 有 **虚线** 、**实线** 、**双线**。

  实线在边框宽度已经展示。

  虚线是边框实线间断性的样式。

  ![图形界面 - 文字](/assets/img/graphicpage/038.png)
 
  双线相当于实线剩下边。

  ![图形界面 - 文字](/assets/img/graphicpage/039.png)

* **边框颜色**： 可以对文本框边框设置颜色。

* **关联点**：  点击 **关联点** ,弹出 **点名** 窗口,填写点名,点击确定可以将文字与点进行关联。

  ![图形界面 - 文字](/assets/img/graphicpage/040.png)

* **小数位数**： 若文本框内仅有数字，可以设置小数位数，来对数值进行小数位数限制。

  设置文本值为3.123456,小数位数是5,可以看到文本框内的数值，进行了四舍五入。

  ![图形界面 - 文字](/assets/img/graphicpage/041.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 图片

点击左侧 **图片控件**,将弹出选择图片窗口，点击选择文件，可以选择本地文件，点击 **【上传】**，在列表中选择已上传的文件，确定。

![图形界面 - 图片2](/assets/img/graphicpage/043.png)

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级。可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 可以设置图片的宽度。

* **高**： 可以设置图片的高度。

* **锁定比例**： 锁定图片比例以至于不会出现图片变形，改变图片宽，高将随之以相同的比例变换。改变高，宽将随之以相同的比例变换。

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 输入框

输入框的种类有 **文本** 、**下拉菜单** 、**复选框** 、 **单选框** 。

1. **文本**： 位于图片控件下方，会弹出列表，选择 **文本** 控件。
  
  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 输入框的宽度。

  * **高**： 输入框的高度。

  * **预期提示**： 可以设置文本框内的提示信息，类似于input标签里的 **placeholder** 属性。

     ![图形界面 - 文本](/assets/img/graphicpage/044.png)

  * **值**： 可以设置文本框的内容。

  * **字号**： 字体大小。

  * **输入类型**： 设置会出现下拉框，选项有 **文字** 、**数字** 、**密码** 、**日期** 、**时间** 、**日期时间** 、**点名** 、**点名历史** 
  、 **点名报警**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。
  
  * **修改事件**： 在修改 **文本输入框** 内容后会触发的事件。

2. **下拉菜单**： 位于图片控件下方，会弹出列表，选择 **下拉菜单** 控件，创建。

  ![图形界面 - 下拉菜单1](/assets/img/graphicpage/045.png)

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 下拉菜单的宽度。

  * **高**： 下拉菜单的高度。

  * **多选模式**： 开启多选模式前，需要设置 **选项** 属性，可参考下一个属性 **选项**,设置了多选模式,下拉菜单将不具弹出下拉框的功能,只具有鼠标滑动选择功能。

     ![图形界面 - 下拉菜单2](/assets/img/graphicpage/047.png)

  * **选项**： 点击 **选项** 的修改，弹出 **选项** 弹出框，可以增加或删除选项，如添加a,b,c,d。

     ![图形界面 - 下拉菜单3](/assets/img/graphicpage/046.png)

  * **值**： 在设置的选项中，默认展示的 **选项**。

     在已经设置选项为 a、b、c、d的情况下，没设置值 或 设置的值为选项中不存在的，选项框展示为空，设置选项中有的值，会展示出来，如b。

     ![图形界面 - 下拉菜单4](/assets/img/graphicpage/0046.png)

  * **字号**： 字体大小。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **刷新事件**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。
  
  * **修改事件**： 在修改 **下拉菜单选项** 后会触发的事件。

3. **复选框**： 
 
  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 复选框可以看为正方形,宽即为边长。

  * **值**： 可控制复选框的选中。
 
     ![图形界面 - 复选框](/assets/img/graphicpage/048.png)

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。
  
  * **修改事件**： 在修改 **复选框选中状态** 后会触发的事件。

4. **单选框**： 

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。
 
  * **宽**： 选中单选框后，有一个白色的虚框线，边长即为宽。若将单选框看为圆形，直径即为宽。

  * **组**： 设置 **组** 属性值为同一个时,就为同一个组,在这一个组里只能选中一个。设置三个单选框，**组** 属性值都设为1，无论如何都只能选一个。

     ![图形界面 - 单选框](/assets/img/graphicpage/049.png)

     再加一个单选框， **组** 属性值为2，此时仍可选中

     ![图形界面 - 单选框](/assets/img/graphicpage/050.png)

  * **值**： 当值选中时，单选框就为选中状态。

     ![图形界面 - 单选框](/assets/img/graphicpage/051.png)

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。
  
  * **修改事件**： 在修改 **单选框选中状态** 后会触发的事件。

### 按钮

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 按钮的宽度。

* **高**： 按钮的高度。

* **主题**： 有 **默认** 、**普通** 、**成功** 、 **一般** 、**警告** 、 **危险** 、**链接**。

  ![图形界面 - 按钮](/assets/img/graphicpage/052.png)

* **文字**： 按钮上的文字设置。

* **字号**： 字体大小。

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 开关

1. **开关(水平)**
 
  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 控件x轴方向的长度。

  * **分闸颜色**： 闸分开时设置的颜色。

  * **合闸颜色**： 闸闭合时设置的颜色。

  * **状态**： 从左到右依次为分闸 、 合闸 、未知。

     ![图形界面 - 开关](/assets/img/graphicpage/053.png)
 
  * **线条宽度**： 闸的线条宽度。

  * **遥信点**： 设置摇信点，弹出 **点名** 窗口，设置点名，点击确定，可以关联到点。遥信点是对诸如告警情况、开关位置或阀门位置等状态信息的远程监视的设备。

     ![图形界面 - 开关](/assets/img/graphicpage/054.png)

  * **分闸值**： 设备分闸时候的值。

  * **合闸值**： 设备合闸时候的值。

  * **遥控点**： 设置遥控点,弹出点名窗口，设置点名，点击确定。遥控点是对远程的一些开关控制设备进行远程控制的设备。

    ![图形界面 - 开关](/assets/img/graphicpage/055.png)

  * **控制分值**： 控制分闸时候的值。

  * **控制合值**： 控制合闸时候的值。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

2. **开关(垂直)**

  开关属性与 **开关(水平)** 的属性一致,类似 **开关(水平)** 逆时针旋转90度的样子。

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 控件x轴方向的长度。

  * **分闸颜色**： 这个闸分开时设置的颜色。

  * **合闸颜色**： 这个闸闭合时设置的颜色。

  * **状态**： 分闸 、 合闸 、未知。

  * **线条宽度**： 闸的线条宽度。

  * **摇信点**： 设置摇信点，弹出 **点名** 窗口，设置点名，确定，可以关联到点。

  * **分闸值**： 设备分闸时候的值。

  * **合闸值**： 设备合闸时候的值。

  * **遥控点**： 设置遥控点,弹出点名窗口，设置点名，确定。

  * **控制分值**： 控制分闸时候的值。

  * **控制合值**： 控制合闸时候的值。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

     ![图形界面 - 开关](/assets/img/graphicpage/056.png)

3. **断路器**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 控件x轴方向的长度。

  * **高**： 控件y轴方向的长度。

  * **分闸颜色**： 这个闸分开时设置的颜色。

  * **合闸颜色**： 这个闸闭合时设置的颜色。

  * **状态**： 分闸 、 合闸 、未知。表现控件颜色分别为绿色、红色、灰色。

  * **摇信点**： 设置摇信点，弹出 **点名** 窗口，设置点名，确定，可以关联到点。

  * **分闸值**： 设备分闸时候的值。

  * **合闸值**： 设备合闸时候的值。

  * **遥控点**： 设置遥控点,弹出点名窗口，设置点名，确定。

  * **控制分值**： 控制分闸时候的值。

  * **控制合值**： 控制合闸时候的值。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

     ![图形界面 - 开关](/assets/img/graphicpage/057.png)

4. **开关(自定义)**。

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 控件x轴方向的长度。

  * **高**： 控件y轴方向的长度。

  * **分闸颜色**： 这个闸分开时设置的颜色。

  * **合闸颜色**： 这个闸闭合时设置的颜色。

  * **状态**： 分闸 、 合闸 、未知。

  * **摇信点**： 设置摇信点，弹出 **点名** 窗口，设置点名，确定，可以关联到点。

  * **分闸值**： 设备分闸时候的值。

  * **合闸值**： 设备合闸时候的值。

  * **遥控点**： 设置遥控点,弹出点名窗口，设置点名，确定。

  * **控制分值**： 控制分闸时候的值。

  * **控制合值**： 控制合闸时候的值。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

     ![图形界面 - 开关](/assets/img/graphicpage/058.png)

### 表格

1. **表格整体**

  * **ID**： 唯一标识，用于锁定控件和代码处理。
 
  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级。

  * **宽**： 表格整体的宽度。

  * **高**： 表格整体的高度。
 
  * **背景颜色**： 可以设置表格背景的颜色。

  * **行数**： 表格行的数目。

  * **列数**： 表格列的数目。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

     ![图形界面 - 表格](/assets/img/graphicpage/059.png)

2. **单元格**

  双击单元格将展示出单元格的属性

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **文本对齐**： 单元格内文本水平方向的对齐方式，**左对齐** 、**居中对齐** 、**右对齐**。

  * **垂直对齐**： 单元格内文本垂直方向的对齐方式，**顶对齐** 、**底对齐**、**居中对齐**。

  * **文本颜色**： 单元格内文字的颜色。

  * **字号**： 字体的大小。

  * **粗体**： 设置文字是否加粗。

  * **背景颜色**： 可以设置单元格内背景衬托色。

     设置为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/117.png)

  * **边框宽度**： 即单元格的边框向框内和框外扩展的程度。

     设置边框宽度为10

     ![图形界面 - 背景颜色](/assets/img/graphicpage/1171.png)

  * **边框样式**： 有 实线 、虚线、双线。

     实线在**边框宽度**已经展示。

     虚线是间断的实线边框样式。

     ![图形界面 - 边框样式](/assets/img/graphicpage/1172.png)

     双线是实线边框只剩部分边的特殊样式。

     ![图形界面 - 边框样式](/assets/img/graphicpage/1173.png)

  * **边框颜色**： 单元格轮廓线的颜色。

     ![图形界面 - 边框颜色](/assets/img/graphicpage/1174.png)

  * **文字**： 单元格的内容。

  * **关联点**： 关联的点位，设置会弹出点名弹窗，可以添加点名。

     ![图形界面 - 关联点](/assets/img/graphicpage/1175.png)

  * **小数位数** ；可以限制单元格内的小数位数。

     设置单元格内容为1.123456，小数位数设置为5，此时单元格内显示为1.12346。

     ![图形界面 - 小数位数](/assets/img/graphicpage/1176.png)

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。
 
  * **点击事件**： 点击控件所触发的事件。

### 图表

1. **柱状图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **堆叠**： 实现堆叠的效果，同组数据将堆叠在一个柱形上，可以方便的观察组内数据分别的占比情况。

     原图

     ![图形界面 - 图表堆叠](/assets/img/graphicpage/063.png)

     将 **堆叠** 设置为 **选中** 状态

     ![图形界面 - 图表堆叠](/assets/img/graphicpage/064.png)

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 图表导出](/assets/img/graphicpage/065.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。
  设置完图例后，查看图表下方的 **Data** 即为图例

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景颜色为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/066.png)

  * **颜色列表**： 是给柱状图中的柱子颜色设置。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/060.png)

  * **数据**： 给图表每列设置数据。设置会弹出 **数据** 窗口。

     ![图形界面 - 数据](/assets/img/graphicpage/061.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/062.png)

  * **关联模式**： 下拉选项中有 **推进** 和 **变化** 。

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

2. **条状图**
   
  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。
 
  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **堆叠**： 实现堆叠的效果，同组数据将堆叠在一个柱形上，可以方便的观察组内数据分别的占比情况。

     原图

     ![图形界面 - 堆叠](/assets/img/graphicpage/067.png)

     选中 **堆叠** 属性

     ![图形界面 - 堆叠](/assets/img/graphicpage/068.png)

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/069.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。
  设置完图例后，查看图表下方的 **Data** 即为图例

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝

     ![图形界面 - 背景颜色](/assets/img/graphicpage/070.png)

  *  **颜色列表**： 用于给图中的条形设置颜色。

     ![图形界面 - 背景颜色](/assets/img/graphicpage/071.png)
 
  * **数据**： 用于给图表添加数据。

     ![图形界面 - 数据](/assets/img/graphicpage/072.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/073.png)

  * **关联模式**： 下拉选项中有 **推进** 和 **变化** 。

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

3. **折线图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/074.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。
   设置完图例后，查看图表下方的 **Data** 即为图例

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/075.png)

  * **线宽**： 折线的粗细。

     原线宽为2，现在设置线宽为5

     ![图形界面 - 线宽](/assets/img/graphicpage/076.png)

  * **标记点半径**： 折线转折点的半径。

     标记点半径由4设置为10。

     ![图形界面 - 标记点半径](/assets/img/graphicpage/077.png)

  * **十字准线**： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。

     ![图形界面 - 十字准线](/assets/img/graphicpage/0077.png)

  * **整合标签**： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/0078.png)

  * **颜色列表**： 用于设置折线颜色。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/078.png)

  * **数据**： 用于设置折线图数据。

     设置 **数据** 属性，会弹出 **数据弹窗** ，弹窗的顶部有x轴数据类型，可以选择 **数字** 或 **时间**。下方有 **组名** 和 **数据列** 设置。

     ![图形界面 - 数据](/assets/img/graphicpage/079.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/080.png)

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

4. **曲线图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/081.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。
   设置完图例后，查看图表下方的 **Data** 即为图例

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/082.png)

  * **线宽**： 折线的粗细。

     原线宽为2，现在设置线宽为5

     ![图形界面 - 线宽](/assets/img/graphicpage/083.png)

  * **标记点半径**： 折线转折点的半径。

     标记点半径由4设置为10。

     ![图形界面 - 标记点半径](/assets/img/graphicpage/084.png)

  * **十字准线**： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。

     ![图形界面 - 标记点半径](/assets/img/graphicpage/0084.png)

  * **整合标签**： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。

     ![图形界面 - 整合标签](/assets/img/graphicpage/0085.png)

  * **颜色列表**： 用于设置折线颜色。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/085.png)

  * **数据**： 用于设置曲线图数据。

     设置 **数据** 属性，会弹出 **数据弹窗** ，弹窗的顶部有x轴数据类型，可以选择 **数字** 或 **时间**。下方有 **组名** 和 **数据列** 设置。

     ![图形界面 - 数据](/assets/img/graphicpage/086.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/087.png)

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

5. **面积图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **堆叠**： 实现堆叠的效果，此时的y轴变长，这组数据将叠加在一起，可以方便的看出它每部分的占比情况。

     原图

     ![图形界面 - 堆叠](/assets/img/graphicpage/088.png)

     设置堆叠效果后

     ![图形界面 - 堆叠](/assets/img/graphicpage/089.png)

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/090.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**，设置完图例后，查看图表下方的 **Data** 即为图例。

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/091.png)

  * **线宽**： 折线的粗细。

     原线宽为2，现在设置线宽为5

     ![图形界面 - 线宽](/assets/img/graphicpage/092.png)

  * **标记点半径**： 折线转折点的半径。

     标记点半径由4设置为10。

     ![图形界面 - 标记点半径](/assets/img/graphicpage/093.png)

  * **十字准线**： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。

     ![图形界面 - 十字准线](/assets/img/graphicpage/0093.png)

  * **整合标签**： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。

     ![图形界面 - 整合标签](/assets/img/graphicpage/0094.png)

  * **颜色列表**： 用于设置折线颜色。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/094.png)

  * **基准值**： 一条x轴方向的线，它对应y值是基准值。

     **基准值**由0改为10，图表将以y=10的基准线重构面积图。

     ![图形界面 - 基准](/assets/img/graphicpage/095.png)

  * **数据**： 用于设置面积图数据。

     设置 **数据** 属性，会弹出 **数据** 弹窗，弹窗的顶部有x轴数据类型，可以选择 **数字** 或 **时间**。下方有 **组名** 和 **数据列** 设置。

     ![图形界面 - 数据](/assets/img/graphicpage/096.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/097.png)

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

6. **曲线面积图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **堆叠**： 实现堆叠的效果，此时的y轴变长，这组数据将叠加在一起，可以方便的看出它每部分的占比情况。

     原图
 
     ![图形界面 - 堆叠](/assets/img/graphicpage/098.png)

     选中对堆叠属性

     ![图形界面 - 堆叠](/assets/img/graphicpage/099.png)

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **y轴标题**： y轴左侧的标题，用于解释y轴变量。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/100.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。设置完图例后，查看图表下方的 **Data** 即为图例。

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝色

     ![图形界面 - 背景颜色](/assets/img/graphicpage/101.png)

  * **线宽**： 折线的粗细。

     原线宽为2，现在设置线宽为5

     ![图形界面 - 线宽](/assets/img/graphicpage/102.png)

  * **标记点半径**： 折线转折点的半径。

     标记点半径由4设置为10。

     ![图形界面 - 标记点半径](/assets/img/graphicpage/103.png)

  * **十字准线**： 鼠标在移动到折线上的点时出现十字准线，可以很快的观察出对应x轴，y轴的值。

     ![图形界面 - 十字准线](/assets/img/graphicpage/0103.png)

  * **整合标签**： 当鼠标移动到点时，同列上的点也将一同展现出对应的图例值，y值和x值。

     ![图形界面 - 整合标签](/assets/img/graphicpage/0104.png)

  * **颜色列表**： 用于设置折线颜色。

     ![图形界面 - 颜色列表](/assets/img/graphicpage/104.png)

  * **基准值**： 一条x轴方向的线，它对应的y值是基准值。

     **基准值**由0设置为10，面积图将重新构造。

     ![图形界面 - 基准](/assets/img/graphicpage/105.png)

  * **数据**： 用于设置曲线面积图数据。

     设置 **数据** 属性，会弹出 **数据弹窗** ，弹窗的顶部有x轴数据类型，可以选择 **数字** 或 **时间**。下方有 **组名** 和 **数据列** 设置。

     ![图形界面 - 数据](/assets/img/graphicpage/107.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/108.png)

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

7. **饼图**

  * **ID**： 唯一标识，用于锁定控件和代码处理。

  * **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

  * **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

  * **宽**： 图表整体的宽度。

  * **高**： 图表整体的高度。

  * **主题**： 普通 、 深色 、 深蓝 、 灰 、 网格亮 、网格 、 sand - signika 、天空 、青字。

  * **标题**： 图表上方的大标题。

  * **副标题**： 位于标题下方的小标题。

  * **导出**： 设置是否有导出按钮,导出按钮位于图表的右上角,点击导出按钮将弹出下拉框,选项： **View in full screen** 全屏展示、 **打印图表** 、**下载PNG文件** 、 **下载JPEG文件** 、**下载PDF文件** 、**下载SVG文件**。

     ![图形界面 - 导出](/assets/img/graphicpage/109.png)

  * **图例**： 图例是集中于图表一角或一侧的图表上各种符号和颜色所代表内容与指标的说明，有助于更好的认识图表,可以设置是否有 **图例属性**。
  设置完图例后，查看图表下方的 **Data** 即为图例。

  * **提示框**： 设置鼠标移到图中柱形上是否有提示。

  * **数据标签**： 可以选中 **数据标签** 属性，可以看到图表中的每个扇形都由线段指向一个标签。

  * **允许点选**： 点击扇形区域，扇形将与圆分离。

     点击蓝色区块

     ![图形界面 - 允许点选](/assets/img/graphicpage/110.png)

  * **背景颜色**： 图表背后的衬托色。

     设置背景色为蓝色

     ![图形界面 - 允许点选](/assets/img/graphicpage/111.png)

  * **颜色列表**： 设置每个扇形的颜色。

     ![图形界面 - 允许点选](/assets/img/graphicpage/112.png)

  * **内径大小**： 可以在饼图中心空出一片空白的圆形区域。

     设置内径大小为50

     ![图形界面 - 内径大小](/assets/img/graphicpage/113.png)

  * **边框宽度**： 可以设置饼图内扇形的间隔。

     设置边框宽度为10

     ![图形界面 - 边框宽度](/assets/img/graphicpage/114.png)

  * **数据**： 用于设置饼图数据。

     设置 **数据** 属性，会弹出 **数据弹窗** ，**组名** 和 **数据列** 设置。

     ![图形界面 - 数据](/assets/img/graphicpage/115.png)

  * **关联点**： 设置关联点，将弹出 **点列表** 窗口。
   
     ![图形界面 - 关联点](/assets/img/graphicpage/116.png)

  * **点名显示**： 下拉选项中有 **点名** 、**名称** 、**设备名称** 、**链接名**、 **通道名**。

  * **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

  * **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

  * **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

  * **屏幕刷新**： 屏幕刷新控件所触发的事件。

  * **点击事件**： 点击控件所触发的事件。

### 地图

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 地图整体的宽度。

* **高**： 地图整体的高度。

* **主题**： 幻影黑、月光银、远山黛、草色青等。

* **基本设置**： 点击 **基本设置修改**，将弹出 **地图-基础设置** 窗口。

  里面可以设置 **缩放** 等级，缩放等级越大，离的越近，**中心精度** 、**中心维度**，是地图缩放的中心经度和纬度，可以直接使用鼠标移动，使用滑轮缩放。

  ![图形界面 - 基本设置](/assets/img/graphicpage/118.png)

* **标记点**： 修改，会弹出 **地图-标记点设置**，里面可以设置 **经度**、**纬度**、**提示**、**点击事件**。确定。

  进入到**地图-标记点设置**弹窗里，鼠标点击地图的位置，经度、纬度将自动显示。

  设置提示，在**运行**后，鼠标移动到此位置，将出现提示，点击事件则是点击后触发的事件。

  ![图形界面 - 基本设置](/assets/img/graphicpage/119.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **屏幕刷新**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 树状图

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 树状图整体的宽度。

* **高**： 树状图整体的高度。

* **背景颜色**： 设置背后衬托的颜色。

  ![图形界面 - 背景颜色](/assets/img/graphicpage/120.png)

* **文本颜色**： 树状图文本的颜色，可以设置所有文本的颜色，不过是次一级，在 **数据属性** 中也可以修改文本颜色，等级较高，可以替换这个颜色。

  设置文本的颜色，首先需要添加文本，可以添加树状图的单元，可以参考后面的 **数据** 点击修改。

  文本设成红色

  ![图形界面 - 文本颜色](/assets/img/graphicpage/121.png)

* **图标**： 添加图标效果，在树状图文字的前方会出现一个小图标。

  ![图形界面 - 图标](/assets/img/graphicpage/122.png)

* **多选框**： 添加多选框，在树状图文字的前方会出现一个多选框。

  ![图形界面 - 多选框](/assets/img/graphicpage/123.png)

* **数据**： 点击 **数据属性** 进行修改，弹出 **树-数据设置** 弹窗。

  点击节点，添加，可以在本节点的分支上增加一个新的节点，点击确定。

  ![图形界面 - 数据](/assets/img/graphicpage/124.png)

  在 **树-数据设置** 弹窗中，点击节点，点击删除，就可以删除当前节点，当前节点的分支也将不存在。

  在 **树-数据设置** 弹窗中，点击节点，右侧有 **名称** 可以修改节点的名称，**文本颜色** 可以修改字体的颜色，**背景颜色** 可以修改包含字体的小灰框的颜色。**点击事件** 可以在点击此树状图节点时触发事件，**选中事件** 可以在选中此树状图节点时触发事件，然后点击**修改** - **确定**。

  ![图形界面 - 数据](/assets/img/graphicpage/125.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **屏幕刷新**： 屏幕刷新控件所触发的事件。

### 页面嵌入

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 控件整体的宽度。

* **高**： 控件整体的高度。

* **背景颜色**： 可以改变控件的总体颜色。

  添加控件，设置背景颜色

  ![图形界面 - 背景颜色](/assets/img/graphicpage/126.png)

* **地址**： 另一个页面中地址栏中的地址，目的是为了实现联系。

  新建一个页面，添加一个圆形。

  ![图形界面 - 地址](/assets/img/graphicpage/127.png)

  运行此页面，将网页地址栏中的地址如端口号后面的 /bin/web.wk?web=ScreenOperate&type=web&screen=screen_1&debug=true，是你自己的网址。复制粘贴到有 **页面嵌入** 控件的 **地址** 属性里，运行。

  可以看到，其实页面嵌入的是粘贴的网址页面，由于页面嵌入控件小于粘贴的网址页面，所以页面嵌入控件出现了滑动条。

  ![图形界面 - 地址](/assets/img/graphicpage/129.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **屏幕刷新**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 视频-萤石云

可以在 **维护** 模式中，选择萤石服务，添加相应数据，参考目录中 [萤石服务配置](ezviz.md)。

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 控件整体的宽度。

* **高**： 控件整体的高度。

* **背景颜色**： 可设置的本身的颜色。

  ![图形界面 - 背景颜色](/assets/img/graphicpage/130.png)

* **账号**： 根据组态模式下，添加的萤石云账号名称，选择对应即可。

* **模板**： 选项有 **极简版** 、**标准版** 、**安防版**。如果配置了云存储 或者 有本地存储（SD卡/NVR），将模板设置为安防版，可以查看存储录像。

* **设备序列号**： 可以在 萤石开发者服务 – 我的资源 – 设备列表 页面找到，播放哪个就填入哪个。

* **验证码**： 默认可以在 摄像头或硬盘录像机 的机身上找到（验证码可以被修改）。

* **通道号**： 可以在 萤石开发者服务 – 我的资源 – 设备列表 页面找到，播放哪个就填入哪个。

* **清晰度**： 选项有 **流畅** 、**高清**。

* **自动播放**： 直接播放。

* **声音**： 选中即为开。

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **屏幕刷新**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

### 视频微控RTSP视频服务2

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 控件整体的宽度。

* **高**： 控件整体的高度。

* **服务地址**： 

* **RTSP地址**： 

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

### 回放视频微控RTSP视频服务

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 控件整体的宽度。

* **高**： 控件整体的高度。

* **服务地址**： 

* **RTSP地址**： 

* **录像时间**： 时间选择。

* **跳过音频**： 跳过声音和视频。

* **自动播放**： 直接播放。

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

### 自定义

在控件中可以编写代码。

* **ID**： 唯一标识，用于锁定控件和代码处理。

* **xy**：以页面左上角为原点，建立坐标系，向右为x轴正轴，向下为y轴正轴。

* **z**： 用于控制控件先后,有些类似z-index层级，可参考 [点z属性](graphic_pageone.md#点)。

* **宽**： 控件整体的宽度。

* **高**： 控件整体的高度。

* **背景颜色**： 自定义控件的颜色。

* **Code**： 在自定义页面中编写代码，可以是HTML、CSS、Javascript、jquery。

  编写代码

  ![图形界面 - 编写代码](/assets/img/graphicpage/151.png)

  运行后

  ![图形界面 - 编写代码](/assets/img/graphicpage/152.png)

* **锁定**： 给控件设置锁定后,使用 **指针** 工具将不能拖动控件。

* **隐藏**： 给控件设置隐藏后，点击 **运行** 图标按钮，运行后的页面此控件 **隐藏** 了。。

* **加载事件**： 每次开启页面时进行的一次加载所触发的事件。

* **刷新事件**： 屏幕刷新控件所触发的事件。

* **点击事件**： 点击控件所触发的事件。

## 工具对齐设置

**布局方式介绍**： 将不动的矩形称为 **基准矩形**，将移动的矩形称为 **移动矩形**，在以下布局方式中会用到。

### 对齐方式

初始界面

![图形界面 - 对齐方式](/assets/img/graphicpage/131.png)

* **左对齐**

   按住 **Shift** 点击为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **左对齐**，另一个矩形将以基准矩形的左边对齐。

   ![图形界面 - 左对齐](/assets/img/graphicpage/132.png)

* **水平居中对齐**

   按住 **Shift** 点击以之为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **水平居中对齐**，移动矩形将会移动，使得基准矩形的垂直平分线平分移动矩形。

   ![图形界面 - 水平局中对齐](/assets/img/graphicpage/133.png)

* **右对齐**

   按住 **Shift** 点击为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **右对齐**，移动矩形将以基准矩形的右边对齐。

   ![图形界面 - 右对齐](/assets/img/graphicpage/134.png)

* **顶对齐**

   按住 **Shift** 点击为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **顶对齐**，移动矩形将以基准矩形的顶边对齐。

   ![图形界面 - 顶对齐](/assets/img/graphicpage/135.png)

* **垂直居中对齐**

   按住 **Shift** 点击为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **垂直居中对齐**，移动矩形将会移动，使得基准矩形的水平平分线平分移动矩形。

   ![图形界面 - 顶对齐](/assets/img/graphicpage/136.png)

* **底对齐**

   按住 **Shift** 点击为基准的矩形，松开 **Shift**,点击需要移动的矩形，点击 **底对齐**，移动矩形将以基准矩形的底边对齐。

   ![图形界面 - 底对齐](/assets/img/graphicpage/137.png)

### 分布方式

三个矩形的初始摆放位置。

![图形界面 - 分布方式](/assets/img/graphicpage/0138.png)

* **顶部分布**

   框选三个矩形，选择 **顶部分布**，如果给三个矩形从上到下进行编号一二三。

   只有二号会移动，在垂直方向上，一号的上边缘到二号的上边缘距离 **=** 二号的上边缘到三号上边缘的距离

   ![图形界面 - 顶部分布](/assets/img/graphicpage/138.png)

* **垂直居中分布**

   框选三个矩形，选择 **垂直居中分布**，如果给三个矩形从上到下进行编号一二三。

   只有二号会移动，在垂直方向上 ，一号垂直方向中间点到二号垂直方向中间点的距离 **=** 二号垂直方向中间点到三号垂直方向中间点的距离。

   ![图形界面 - 垂直居中分布](/assets/img/graphicpage/139.png)

* **底部分布**

   选中三个矩形，选择 **底部分布**，如果给三个矩形从上到下进行编号一二三。

   只有二号会移动，在垂直方向上，一号底部到二号底部的距离 **=** 二号底部到三号底部的距离。

   ![图形界面 - 底部分布](/assets/img/graphicpage/140.png)

* **左侧分布**

   选中三个矩形，选择 **左侧分布**，如果给三个矩形从左到右进行编号一二三。

   只有二号会移动，在水平方向上，一号左侧到二号左侧的距离 **=** 二号左侧到三号左侧的距离。

   ![图形界面 - 左侧分布](/assets/img/graphicpage/141.png)

* **水平居中分布**

   选中三个矩形，选择 **水平居中分布**，如果给三个矩形从左到右进行编号一二三。

   只有二号会移动，在水平方向上，一号水平方向中间到二号水平方向中间的距离 **=** 二号水平方向中间到三号水平方向中间的距离。

   ![图形界面 - 水平居中分布](/assets/img/graphicpage/142.png)

* **右侧分布**

   选中三个矩形，选择 **右侧分布**，如果给三个矩形从左到右进行编号一二三。

   只有二号会移动，在水平方向上，一号右边缘到二号右边缘的距离 **=** 二号右边缘到三号右边缘的距离。

   ![图形界面 - 右侧分布](/assets/img/graphicpage/143.png)

### 匹配方式

初始界面

![图形界面 - 匹配方式](/assets/img/graphicpage/0144.png)

* **匹配宽度**

   选中三个矩形，选择 **匹配宽度**，三个矩形的宽都将变为 矩形宽最宽的那条边。宽将一致。

   ![图形界面 - 匹配宽度](/assets/img/graphicpage/144.png)

* **匹配高度**

   选中三个矩形，选择 **匹配高度**，三个矩形的高都将变为 矩形高最高的那条边。高将一致。

   ![图形界面 - 匹配高度](/assets/img/graphicpage/145.png)

* **匹配宽度和高度**

   选中三个矩形，选择 **匹配宽度和高度**，将变为相同的形状，三个矩形的宽都将变为 矩形宽最宽的那条边。宽将一致；三个矩形的高都将变为 矩形高最高的那条边。高将一致。

   ![图形界面 - 匹配宽度和高度](/assets/img/graphicpage/146.png)

### 间隔方式

原图

![图形界面 - 原图](/assets/img/graphicpage/0148.png)

* **垂直平均间隔**

   选中三个矩形，选择 **垂直平均间隔**，如果给三个矩形从上到下进行编号一二三，中间的矩形，垂直方向移动，使得垂直方向上一号到二号的距离 **=** 二号到三号的距离。

   ![图形界面 - 垂直平均间隔](/assets/img/graphicpage/148.png)

* **水平平均间隔**

   选中三个矩形，选择 **水平平均间隔**，如果给三个矩形从左到右进行编号一二三，中间的矩形，水平方向移动，使得水平方向上一号到二号的距离 **=** 二号到三号的距离。

   ![图形界面 - 水平平均间隔](/assets/img/graphicpage/150.png)


## 代码编辑窗口

在修改 **加载事件**、**屏幕刷新**、**点击事件**、**自定义code** 属性时，会弹出 **代码编辑** 窗口，在最左侧是打开过的窗口导航，中间空白部分进行代码编辑，最右侧有 **疑问** 图标，鼠标移动到上面，会弹出 **快捷键提示** ；**【保存】** 图标按钮： 编写完代码后须保存，否则会丢失代码。

![图形界面 - 编写代码](/assets/img/graphicpage/153.png)

## 快捷键

**代码编辑窗口快捷键**： 

  * **Esc**： 退出编辑

  * **Ctrl + S**： 保存

  * **Ctrl + /**： 添加注释

  * **Ctrl + D**： 重复 行或选择

  * **Ctrl + F**： 查找

  * **Ctrl + R**： 替换

  * **Ctrl + G**： 跳转行/列

  * **Shift + Ctrl + -**： 全部折叠

  * **Shift + Ctrl + =**： 全部展开

  * **Ctrl + Alt + L**： 重新格式化代码

  * **Alt + /**： 代码提示

**图形编辑界面快捷键**： 

  * **Ctrl + S**： 保存页面

  * **Ctrl + O**： 打开页面

  * **Ctrl + Z**： 撤销

  * **F5**： 运行页面

  * **Ctrl + C**： 鼠标选中控件后，复制控件

  * **Ctrl + V**： 粘贴控件

  * **Ctrl + X**： 鼠标选中控件后，剪切控件
