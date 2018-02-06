jQuery("#simulation")
  .on("click", ".s-91b8e1af-34e6-4451-9eeb-b34330590b2f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_1",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_1" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_1": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_1" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_1": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_2",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_2" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_2": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_2" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_2": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_3",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_3" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_3": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_3" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_3": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_4",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_4" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_4": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_4" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_4": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_5",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_5" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_5": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_5" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_5": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_7",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_7" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_7": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_7" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_7": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_7": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_9",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_9" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_9": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_9": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_9" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_9": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_9": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/524a090f-e173-41f9-a00c-ef7c4b250ca9"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_6",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_6" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_6": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_6" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_6": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Button_8",
                  "property": "jimGetValue"
                },"+" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_8" ],
                    "value": "-"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_8": {
                      "attributes": {
                        "background-color": "#FF0000",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_8": {
                      "attributes-ie": {
                        "-pie-background": "#FF0000",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_8" ],
                    "value": "+"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_8": {
                      "attributes": {
                        "background-color": "#08AE9E",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-91b8e1af-34e6-4451-9eeb-b34330590b2f #s-Button_8": {
                      "attributes-ie": {
                        "-pie-background": "#08AE9E",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-91b8e1af-34e6-4451-9eeb-b34330590b2f .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Pinned-top" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowScrollY"
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("windowscroll", ".s-91b8e1af-34e6-4451-9eeb-b34330590b2f .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Pinned-top" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowScrollY"
                      }
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });