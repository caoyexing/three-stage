
配置别名 在config 的文件夹中
1.paths.js 中自己配置一个  appSrc: resolveApp('src'),
2.在webcofig.js中找到 alais 自己配置 '@':paths.appSrc
重启程序
重新更改了一下
当内部的文件中有.git 文件时 不能提交 将 .git 文件删除 提交