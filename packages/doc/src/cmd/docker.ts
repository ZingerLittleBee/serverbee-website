const dockerCMD = `curl -fsSL https://get.docker.com | bash

# 安装 docker-compose

# curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# chmod a+x /usr/local/bin/docker-compose

# 启动 docker

systemctl start docker

# 启动 docker

# service docker start

# 开机自启

systemctl enable docker.service

# 查看 docker 状态

systemctl status docker.service
`

export  default  dockerCMD
