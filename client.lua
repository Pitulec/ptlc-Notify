exports('sendNotify', function(data) SendNUIMessage({action = 'Notify', desc = data}) end)

RegisterCommand('testNotify', function()
    exports['ptlc-notify']:sendNotify('Command text')
end)