
(function () {
    
app.controller("filterPartCtrl", function (AclService,app) {
    var fpc = this;
    fpc.name = "Welcome to dashboard.";
    app.setTitle("Create Part | Juno Clinic Admin");
    fpc.part='';
   
    fpc.partList=[
        {id:101,name:'E 302 377 59',desc:'SANY - BODY INNER',selectedParameterList:[ 
            {id:1,machineId:1,mendatory:false,actual:'',tool:'',remark:'',counter:5,name:'DEPTH 341.5 +2 / 0"', tools:[
            {"id" : 1, "name" : "GRA SPL SCALE"},
            {"id" : 2, "name" : "VERNIER"},
            {"id" : 3, "name" : "VISUAL"},
            {"id" : 4, "name" : "1st OFF"}

        ]},
        {id:2,machineId:1,mendatory:false,actual:'',tool:'',remark:'',counter:5,name:'DIA 14 * 60 Deg', tools:[
            {"id" : 1, "name" : "GRA SPL SCALE"},
            {"id" : 3, "name" : "VISUAL"},
            {"id" : 4, "name" : "1st OFF"}
        ]}
    ]},
        {id:102,name:'E 302 377 58',desc:'SANY - BODY OUTER',selectedParameterList:[      
            {id:5,machineId:4,mendatory:false,name:'G1/2 Tap / DEPTH 16 MIN', tools:[
                {"id" : 3, "name" : "VISUAL"},
                {"id" : 4, "name" : "1st OFF"}

        ]},
        {id:6,machineId:4,mendatory:false,name:'PT 1/8 (GAUGE PLANE 5-7)',tools:[
            {"id" : 1, "name" : "GRA SPL SCALE"},
            {"id" : 4, "name" : "1st OFF"}

        ]}]}
    ];
                fpc.toolList = [
                    {"id" : 1, "name" : "GRA SPL SCALE"},
                    {"id" : 2, "name" : "VERNIER"},
                    {"id" : 3, "name" : "VISUAL"},
                    {"id" : 4, "name" : "1st OFF"},
                    {"id" : 5, "name" : "TPG"},
                    {"id" : 6, "name" : "MATINH PLUG"},
                    {"id" : 7, "name" : "THREAD PLUG GUAGE"},
                    {"id" : 8, "name" : "OD MIC 75-100"},
                    {"id" : 9, "name" : "BLADE MIC 75-100"},
                    {"id" : 10, "name" : "PLAIN PLUG GUAGE"},
                    {"id" : 11, "name" : "VERNIER (ACROSS FLAT)"},
                    {"id" : 12, "name" : "VISUAL (@ o6&DIA 10)"},
                    {"id" : 13, "name" : "SERIAL PUNCH"},
                    {"id" : 14, "name" : "DEBURRING FILE"},
                    {"id" : 15, "name" : "REQUIRED TOOLS"},
                    {"id" : 16, "name" : "SURTRONIC"},
                    {"id" : 17, "name" : "BLOW AIR"},
                    {"id" : 18, "name" : "SPECIAL WASHINGM/C"}
                ];
   
    fpc.tableData={selectedParameterList:[]};
    fpc.filterPart=function(){
        if(fpc.part!=''){
            for(var i=0;i<fpc.partList.length;i++){
                if(fpc.part==fpc.partList[i].id){
                   fpc.tableData=fpc.partList[i]
                }
            }
        }else{
            fpc.tableData={};

        }
    }
    fpc.parameterID='';
    fpc.addToolModal=function(id){
        fpc.parameterID=id;
        fpc.openModal('createToolModal');
    }
    fpc.openModal=function(id){
        fpc.tool='';
        fpc.actualValue='';
        fpc.downTolerance='';
        fpc.upTolerance='';
        $("#"+id).modal('show');
    }
    fpc.hideModal=function(id){
        $("#"+id).modal('hide');
    }
    fpc.addToolInPrameter=function(tool){ 
        if($('#create-part-form').valid()){
            for(var i=0;i<fpc.tableData.selectedParameterList.length;i++){
                if(fpc.parameterID==fpc.tableData.selectedParameterList[i].id){
                    var json=JSON.parse(tool);                    
                    fpc.tableData.selectedParameterList[i].tools.push(json);
                }
            }       
            fpc.hideModal('createToolModal');
        } 
    }
    fpc.removeParameterModal=function(param){
        // for(var i=0;i<fpc.selectedParameterList.parameterList.length;i++){
        //     parameter.push(JSON.parse(fpc.parameter[i]));
        // } 
    }
    fpc.getPrameterByMachineId=function(){
        fpc.tempParameterList=[];
        var obj=JSON.parse(fpc.machine);
        if(obj.id!=''){
            for(var i=0;i<fpc.parameterList.length;i++){
                if(obj.id==fpc.parameterList[i].machineId){
                    fpc.tempParameterList.push(fpc.parameterList[i]);
                }
            }
        }
    }
    fpc.createPart=function(){
        if ($("#create-part-form").valid()) {
            if(fpc.id!=''){
                for(var i=0;i<fpc.partList.length;i++){
                    if(fpc.id==fpc.partList[i].id){
                        fpc.partList[i].name=fpc.name;
                        fpc.partList[i].desc=fpc.desc;
                    }
                }
            }else{
                var id=fpc.partList[fpc.partList.length-1].id;
                var req={id:++id,name:fpc.name,desc:fpc.desc};
                fpc.partList.push(req);

            }
            
            $("#createPartModal").modal('hide');
        }
       
    }
})
    
})();