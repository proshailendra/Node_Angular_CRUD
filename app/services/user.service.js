angular
    .module("myApp")
    .factory("userService", function(globalConfig, $http) {
        var url = "";
        return {
            getUsers: function() {
                url = globalConfig.apiAddress + "/userapi";
                return $http.get(url);
            },
            getUser: function(id) {
                url = globalConfig.apiAddress + "/userapi/" + id;
                return $http.get(url);
            },
            addUser: function(user) {
                url = globalConfig.apiAddress + "/userapi";
                return $http.post(url, user);
            },
            modifyUser: function(user) {
                url = globalConfig.apiAddress + "/userapi/" + user.userId;
                return $http.put(url, user);
            },
            deleteUser: function(id) {
                url = globalConfig.apiAddress + "/userapi/" + id;
                return $http.delete(url);
            },
        };
    });