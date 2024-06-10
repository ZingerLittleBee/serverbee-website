# Communication Key

:::tip
1. The server's `Communication Key` will be set automatically upon the **first connection**.
2. The automatically set value is the `Communication Key` set within the APP (can be the APP global key, or a manually set key).
:::

## Communication Key Interface
:::caution
The following interfaces can only be accessed from `localhost`
:::

### View Key
> App-related configurations, including communication keys

```bash
curl http://localhost:9527/local/config/app
```
The response is as follows:
```json
{
  "success": true,
  "data": {
    "token": "token"
  }
}
```

### Reset Key
```bash
curl -X POST -H "Content-Type: application/json" -d '{"token": "newToken"}' http://localhost:9527/local/config/app
```
The response is as follows:
```json
{
"success": true
}
```
