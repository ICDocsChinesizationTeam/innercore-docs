cd /www/wwwroot/innercore-docs/
rm -rf out1
source /etc/profile
grunt concat
grunt typedoc
cp -f refresh* out/
cp -rf out1/* out/
