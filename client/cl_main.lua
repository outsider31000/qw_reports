-- COMMANDS --
VORP = {}
TriggerEvent("getCore", function(core)
    VORP = core
end)

RegisterCommand("createreport", function()
    SendNUIMessage({ action = 'setVisible', data = { show = true, type = 'user' } })
    SetNuiFocus(true, true)
end, false)

RegisterCommand("viewreports", function()
    VORP.RpcCall('qw_reports:server:checkPerms', function(allowed)
        if allowed then
            SendNUIMessage({ action = 'setVisible', data = { show = true, type = 'admin' } })
            SetNuiFocus(true, true)
        end
    end)
end, false)

AddEventHandler("vorp_admin:CreateReport", function()
    SendNUIMessage({ action = 'setVisible', data = { show = true, type = 'user' } })
    SetNuiFocus(true, true)
end)

AddEventHandler("vorp_admin:viewreports", function()
    SendNUIMessage({ action = 'setVisible', data = { show = true, type = 'admin' } })
    SetNuiFocus(true, true)
end)

-- REPORTING CALLBACKS AND EVENTS --

RegisterNetEvent('qw_reports:client:sendNotification', function()
    VORP.NotifyRightTip("Report success", 8000)
end)

RegisterNUICallback('reports/CreateReport', function(data, cb)
    TriggerServerEvent('qw_reports:server:createReport', data)
    cb("ok")
end)

RegisterNUICallback('reports/DeleteReport', function(data, cb)
    TriggerServerEvent('qw_reports:server:deleteReport', data)
    cb("ok")
end)

RegisterNUICallback('reports/GetReports', function(_, cb)
    VORP.RpcCall('qw_reports:server:getCurrentReports', function(reports)
        cb(reports)
    end)
end)

RegisterNUICallback('reports/GetReportTypes', function(_, cb)
    cb(Config.ReportTypes)
end)

-- REPORTING ACTIONS CALLBACKS --

RegisterNUICallback('actions/actionHandler', function(data, cb)
    local reportingPlayer = data.report_src
    local action = data.action
    TriggerServerEvent('qw_reports:server:actionHandler', reportingPlayer, action)
    cb('ok')
end)

-- GENERIC CALLBACKS --

RegisterNUICallback('hideUI', function(_, cb)
    cb('ok')
    SetNuiFocus(false, false)
end)
