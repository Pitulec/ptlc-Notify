# ptlc-Notify
Powiadomienia na serwer FiveM

## Preview


## Export
```lua
RegisterCommand('testNotify', function()
    exports['ptlc-notify']:sendNotify('Otworzyłeś panel Administracyjny')
end)
```