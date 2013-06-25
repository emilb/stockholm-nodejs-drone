function SandboxController($scope, socket, keyCommands, wordClient) {

    var currentData;

    $scope.doForward1Meter = function() {

        wordClient.helloMe();

        wordClient.executeCommand("moveForward 200");
        wordClient.executeCommand("rotate 180");
        /*

        socket.emit("cmd", { "cmd" : "takeoff"});

        commandClient.moveForward(200, function() {

        });

        setTimeout(function() {

            socket.emit("cmd", { "cmd" : "frontStop"});
            var startTime = new Date().getTime();
            while (!haveMovedOneMeter(startTime)) {

            }
            socket.emit("cmd", { "cmd" : "frontStop"});
        }, 5000);
          */

    };

    haveMovedOneMeter = function(startTime) {
        //v = d / t;
//        d = v * t;
        try {
            deltaT = new Date().getTime() - startTime;
            d = me.currentData.demo.zVelocity * deltaT;
            console.log("distance: " + d);
        return d > 10;
        }  catch (error) {}

        return false;
    };
    var me = this;
    socket.on("navdata", function(data) {
        me.currentData = data;

    });

}
