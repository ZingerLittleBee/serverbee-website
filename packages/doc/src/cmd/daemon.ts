const daemonCMD =
`cat > /etc/systemd/system/serverbee-deploy.service <<EOF
[Unit]
Description=ServerBee Deploy
After=network-online.target systemd-resolved.service
Wants=network-online.target systemd-resolved.service

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
