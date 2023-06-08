const daemonCMD =
`cat > /etc/systemd/system/serverbee-deploy.service <<EOF
[Unit]
Description=ServerBee Deploy
After=network.target

[Service]
Type=oneshot
# highlight-next-line
ExecStart=/root/serverbee-deploy # 去掉注释，并修改为实际路径
RemainAfterExit=yes
Environment="RUST_LOG=info"

[Install]
WantedBy=multi-user.target
EOF
systemctl enable serverbee-deploy.service`

export default daemonCMD
