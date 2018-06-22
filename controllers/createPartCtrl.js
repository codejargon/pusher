
(function () {
    
app.controller("createPartCtrl", function (AclService,app) {
    var cpc = this;
    cpc.name = "Welcome to dashboard.";
    app.setTitle("Create Part | Juno Clinic Admin");
    cpc.name='';
    cpc.desc='';
    cpc.id='';
    cpc.partList=[
                    {
                        id:101,name:'E 302 377 59',desc:'SANY - BODY INNER',
                        selectedParameterList:[
                            {
                                machineId:1,machineName:"M/C - MORISEIKI",
                                parameterList:[{name:'DEPTH 341.5 +2 / 0',id:"1"},{id:"2",name:'DIA 14 * 60 Deg'}]
                            }
                        ]
                    },
                    {
                        id:102,name:'E 302 377 58',desc:'SANY - BODY OUTER',
                        selectedParameterList:[
                            {
                                machineId:4,machineName:"M/C - MICRO CYL GRIND M/C",
                                parameterList:[{id:"31",name:'DIA 90^-0.040/-0.055'},{id:"32",name:'FIN Rt 1.6'}]
                            }
                        ]
                    }
                ];
    cpc.machineList = [
        {"id" : 1, "name" : "M/C - MORISEIKI"},
        {"id" : 2, "name" : "M/C - STC 25"},
        {"id" : 3, "name" : "M/C - DAHLIH"},
        {"id" : 4, "name" : "M/C - MICRO CYL GRIND M/C"}
    ];
    cpc.parameterList=[
   
        {"id" : "1", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "DEPTH 341.5 +2 / 0"},
        {"id" : "2", "machineId" : 1 ,machineName:"M/C - MORISEIKI" , "name" : "DIA 14 * 60 Deg"},
        {"id" : "3", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "DIA 10 THRU"},
        {"id" : "4", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "D22.6 ^+0.1 * 15 deg * SF D34^+/-0.3 * 2.5 Max"},
        {"id" : "5", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "G1/2 Tap / DEPTH 16 MIN"},
        {"id" : "6", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "PT 1/8 (GAUGE PLANE 5-7)"},
        {"id" : "7", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "DIA 6, DEPTH 184 +/-0.5"},
        {"id" : "8", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "M 24 * 1.5 -4 Nos"},
        {"id" : "9", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "DEPTH 26 Min / 32 Max"},
        {"id" : "10", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "M 12 THD -4 Nos"},
        {"id" : "11", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "DEPTH 18 Min / 22 Max"},
        {"id" : "12", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "L 385.5 +/- 0.10"},
        {"id" : "13", "machineId" : 1 ,machineName:"M/C - MORISEIKI", "name" : "L 122 +/- 0.2"},
    
        {"id" : "14", "machineId" : 2 ,machineName:"M/C - STC 25", "name" : "DIA 90.3^-0.02/0.05"},
        {"id" : "15", "machineId" : 2 ,machineName:"M/C - STC 25", "name" : "DIA 87^+/-0.10"},
        {"id" : "16", "machineId" : 2 ,machineName:"M/C - STC 25", "name" : "DIA 85^-0.10/0"},
        {"id" : "17", "machineId" : 2 ,machineName:"M/C - STC 25", "name" : "GRU DIA 81.5^-0.350/0"},
        {"id" : "18", "machineId" : 2 ,machineName:"M/C - STC 25", "name" : "GRU WIDTH 3.2^+0.180/0"},
    
        {"id" : "19", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "M10X1.5(16NOS) DEP 20+/-2"},
        {"id" : "20", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "D15.6^+0.1 * 15 deg * SF D24 ^+/-0.3 * 1.5 Max"},
        {"id" : "21", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "G1/4 TAP, DEPTH 13MIN"},
        {"id" : "22", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DIA 20.5 Opened @ DIA 21.5"},
        {"id" : "23", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "L 98^+/-0.20"},
        {"id" : "24", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DIA 23.5  4 HOLES"},
        {"id" : "25", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DEPTH 27 MAX"},
        {"id" : "26", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DIA 3.5, DIA 6 OPEN OUT"},
        {"id" : "27", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "FIN < 12.5S"},
        {"id" : "28", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "PORT PUNCHING"},
        {"id" : "29", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DEBURRING OF SLOTS"},
        {"id" : "30", "machineId" : 3 ,machineName:"M/C - DAHLIH", "name" : "DEBURRING OF CONNECTING HOLES"},
    
        {"id" : "31", "machineId" : 4 ,machineName:"M/C - MICRO CYL GRIND M/C", "name" : "DIA 90^-0.040/-0.055"},
        {"id" : "32", "machineId" : 4 ,machineName:"M/C - MICRO CYL GRIND M/C", "name" : "FIN Rt 1.6"},
        {"id" : "33", "machineId" : 4 ,machineName:"M/C - MICRO CYL GRIND M/C", "name" : "A) Ensure no dent mark / digging mark on OD"},
        {"id" : "34", "machineId" : 4 ,machineName:"M/C - MICRO CYL GRIND M/C", "name" : "B) Remove chips from DIA 10 hole after removing the plug"},
        {"id" : "35", "machineId" : 4 ,machineName:"M/C - MICRO CYL GRIND M/C", "name" : "C) COMP WASHING (HIGH PRESSURE WASHING)"}
    ];
    cpc.tempParameterList=[];
    cpc.selectedParameterList=[];

    cpc.createPartModal=function(){
        cpc.name='';
        cpc.desc='';
        cpc.id='';
        
        cpc.partOpt='Create Part';
      
        cpc.selectedParameterList=[];
        cpc.openModal('createPartModal');
    }
    cpc.editPartModal=function(obj){
       
        cpc.name=obj.name;
        cpc.desc=obj.desc;
        cpc.id=obj.id;
        var json={};
        cpc.selectedParameterList=[];
        cpc.selectedParameterList=obj.selectedParameterList;
        cpc.partOpt='Update Part';
        cpc.openModal('createPartModal');
    }
    cpc.openModal=function(id){
   
        cpc.machine='';
        $('#parameter').val('');
        $('#parameter').select2();
        $("#"+id).modal('show');
    }
    cpc.addProcessAndPrameter=function(){
       
        var machine=JSON.parse($('#machine option:selected').attr('data'));
        var parameter=[];
        for(var i=0;i<cpc.parameter.length;i++){
            parameter.push(JSON.parse(cpc.parameter[i]));
        }       
        var json={};
        json.machineId=machine.id;
        json.machineName=machine.name;
        json.parameterList=parameter;
        cpc.selectedParameterList.push(json);
        console.log(cpc.selectedParameterList);
    
    }
    cpc.removeParameterModal=function(machineId){
        for(var i=0;i<cpc.selectedParameterList.length;i++){
            if(cpc.selectedParameterList[i].machineId==machineId){
                cpc.selectedParameterList.splice(i, 1);
            }
            
        } 
    }
    cpc.getPrameterByMachineId=function(){
        cpc.tempParameterList=[];
        var obj=JSON.parse($('#machine option:selected').attr('data'));
        if(obj.id!=''){
            for(var i=0;i<cpc.parameterList.length;i++){
                if(obj.id==cpc.parameterList[i].machineId){
                    cpc.tempParameterList.push(cpc.parameterList[i]);
                }
            }
        }
    }
    cpc.createPart=function(){
        if ($("#create-part-form").valid()) {
            if(cpc.id!=''){
                for(var i=0;i<cpc.partList.length;i++){
                    if(cpc.id==cpc.partList[i].id){
                        cpc.partList[i].name=cpc.name;
                        cpc.partList[i].desc=cpc.desc;
                    }
                }
            }else{
                var id=cpc.partList[cpc.partList.length-1].id;
                var req={id:++id,name:cpc.name,desc:cpc.desc};
                req.selectedParameterList=cpc.selectedParameterList;
                cpc.partList.push(req);
                console.log(cpc.partList);


            }
            
            $("#createPartModal").modal('hide');
        }
       
    }
})
    
})();