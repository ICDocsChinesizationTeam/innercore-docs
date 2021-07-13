cd /www/wwwroot/innercore-docs
#判断文件是否存在
if [[ ! -f "sx" ]]; then
	 echo "文件不存在"
 else
	 screen -d -m -S aaa bash flash.sh
	 rm -rf sx
fi
