



 
 




 
 
 
 (function () {

    "use strict";


    // Data used in the ListView for the sample
    var myList = new WinJS.Binding.List([
        { title: "Administrators", text: "Mrs Maureen A.", picture: "/img/1.jpg", bio: "bsdhjbhjdasbfhjbdfhjbhjfhjbfhbhjfdb", email: "webmaster@bunksandbiddlesschools.ac.ke" },
        { title: "Principal", text: "Ms. Victoria A.", picture: "/img/4.jpg", bio: "Elasticsearch is a modern, fast, distributed, scalable, fault tolerant, open source search and analytics engine. It provides a new level of control over how you can index and search even huge sets of data. This course will take you from basics of Elasticsearch to using Elasticsearch in the Elastic stack, and in production. You will start with very basics of understanding Elasticsearch terminologies and installation & configuration. After this, you will understand the basic analytics and indexing, search, and querying. You will also learn about creating various maps and visualization. You will also get a quick understanding of cluster scaling, search and bulk operations, and more. You will also learn about backups and security. After this, you will dig your teeth deeper into Elasticsearch's internal functionalities including caches, Apache Lucene library, and its monitoring capabilities. You'll learn about practical usage of Elasticsearch", email: "principal@bunksandbiddlesschools.ac.ke"   },
         { title: "Karen", text: "Grace Kibe", picture: "/img/1.jpg", bio: "" , email: "gracek@bunksandbiddlesschools.ac.ke"}
        /*
        { title: "Supervisors", text: "Miss Albina Imbuga", picture: "/img/1.jpg", bio: "" , email: "" },
        { title: "Head of department", text: "Miss Eunice Kamari", picture: "/img/4.jpg", bio: "", email: ""  },
        { title: "Library", text: "Miss ......", picture: "", bio: "", email : "dfhdfhdh"},
        { title: "Staff", text: "Miss Hilda Wairimu", picture: "/img/3.jpg", bio: "", email: "" },
        { title: "Auxiliary Staff", text: "Miss Jacinta Mwikali", picture: "/img/1.jpg", bio: "" , email: ""},
        { title: "Transport", text: "Mr Jackson Njache", picture: "/img/1.jpg", bio: "", email: "" },
        { title: "Security", text: "Miss Juliana Magomere", picture: "/img/1.jpg", bio: "", email: "" },
        { title: "Catering", text: "Mrs Lilian Odhiambo", picture: "/img/2.jpg", bio: "" , email: ""},
        { title: "Housekeeping", text: "Miss Linda Odera", picture: "/img/3.jpg", bio: "", email: "" },
        { title: "Supervisors", text: "Miss Martha Kanini", picture: "/img/1.jpg", bio: "", email: "" },
        { title: "Head of department", text: "Miss Ruth Nyamisi", picture: "/img/1.jpg", bio: "", email: "" },
        { title: "Grounds", text: "Miss Susan Thetu", picture: "/img/1.jpg", bio: "", email: "" },
        { title: "Accounts", text: "Mrs Jackline Wekesa", picture: "/img/1.jpg", bio: "", email: "" },
       
        */
  
    ]);

    // Create a grouped list for the ListView from the item data and the grouping functions
    var groupedList = myList.createGrouped(getGroupKey, getGroupData, compareGroups);

    // Function used to sort the groups by first letter
    function compareGroups(left, right) {
        return left.toUpperCase().charCodeAt(0) - right.toUpperCase().charCodeAt(0);
    }

    // Function which returns the group key that an item belongs to
    function getGroupKey(dataItem) {
        return dataItem.title.toUpperCase();
       
    }

    // Function which returns the data for a group
    function getGroupData(dataItem) {
        return {
            title: dataItem.title.toProperCase()
        };
    }

    WinJS.Namespace.define("sezoData",
    {
        groupedList: groupedList
    });


     String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toUpperCase();});
};




})();