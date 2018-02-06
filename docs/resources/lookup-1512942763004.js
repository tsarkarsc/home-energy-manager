(function(window, undefined) {
  var dictionary = {
    "2743a59b-6821-4ee2-9acf-5d9c105e7aec": "SheduleOn-Off-GroupCarGarage",
    "dcb65ae6-bd10-4995-a9f6-8b9da0c73e70": "ScheduleOn-Off-LivingLights",
    "a5d2168f-f2ad-4236-bf34-81ba2fb42e3c": "DetailedGroupLivingLights",
    "4b03c72c-25f0-432b-94cd-67c1e52a6f4f": "DetailedGroupPoolHeater",
    "14dfa269-c177-4be8-8332-9a8fde86fc9d": "DetailedGroupWineCellar",
    "7c00c6a2-0045-4a30-afc6-c8cce9c3f262": "View Energy Use",
    "04ad452d-0137-4bbf-9d09-ba9045624fa4": "ScheduleOn-Off-GroupWineCellar",
    "32202a6a-d9eb-4406-8315-f9ef9966f3a9": "DetailedGroup",
    "91b8e1af-34e6-4451-9eeb-b34330590b2f": "EditApplianceGroupPrototypical",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "524a090f-e173-41f9-a00c-ef7c4b250ca9": "Appliance Groups List",
    "d8a84d2c-79e1-47a6-a840-0e7d900ec95f": "DetailedGroupEntertainment",
    "898b2337-dc02-4913-aa7d-90fe109002de": "ScheduleOn-Off-PoolHeater",
    "ab4a8e33-414c-4dca-b6aa-4d67357a5bea": "ScheduleOn-Off-Entertainment",
    "673c47a2-208c-4e8e-8e80-3be3391d70ac": "DetailedGroupCarGarage",
    "caeb2b0a-75e6-47ad-863d-1feaf73d151c": "SheduleOn-Off-Dog",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);