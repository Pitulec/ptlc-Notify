# ptlc-Notify
Powiadomienia na serwer FiveM

## Preview
![1](https://github.com/user-attachments/assets/a712e99d-bd86-48b8-86b6-56c6ff6b28e4) ![2](https://github.com/user-attachments/assets/04c0c457-3eea-4c54-aa50-e940e65700c4)

## Export
```lua
RegisterCommand('testNotify', function()
    exports['ptlc-notify']:sendNotify('Otworzyłeś panel Administracyjny')
end)
```
