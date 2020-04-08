"use strict";
{
    init: function(elevators, floors) {

        // Get the count of passengers waiting across the floor.
        let floorQue = [];

        floors.forEach(function(floor) {

            floorQue.push(false);

            floor.on("down_button_pressed", function() {
                floorQue[floor.floorNum()] = true;
            });

            floor.on("up_button_pressed", function() {
                floorQue[floor.floorNum()] = true;
            });

        });


        elevators.forEach(function(elevator, index) { 
            // Track passenger's activity inside the elevator
            let userPassActivity = [];

            elevator.on("idle", function() {

                if(userPassActivity.length > 0) {

                    // Remove duplicate user activity
                    let identical = [];

                    userPassActivity.forEach(function(activity) { 
                        if( !identical.includes(activity) ){
                            identical.push(activity);
                        }
                    });

                    userPassActivity = identical;

                    // Find the nearest floor for quick access to save time
                    let totalFloors = floors.length;
                    let floorIndex = -1;

                    userPassActivity.forEach(function(activity, index) { 
                        if(Math.abs(activity - elevator.currentFloor()) < totalFloors) {
                            totalFloors = Math.abs(activity - elevator.currentFloor());
                            floorIndex = index;
                        }
                    });

                    elevator.goToFloor(userPassActivity.splice(floorIndex, 1)[0]);
                } else {
                    // Elevator has no action in the queue, hence find the closest floor with passenger request
                    let totalFloors = floors.length;
                    let floorIndex = index;


                    floorQue.forEach(function(que, idx) { 
                        if(que) {
                            if(Math.abs(idx - elevator.currentFloor()) < totalFloors) {
                                totalFloors = Math.abs(idx - elevator.currentFloor());
                                floorIndex = idx;
                            }
                        }
                    });
                    elevator.goToFloor(floorIndex);
                }
            }); 

            elevator.on("stopped_at_floor", function(floorNum) {
                floorQue[floorNum] = false;
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                userPassActivity.push(floorNum);
            });

        }); 



    },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
}