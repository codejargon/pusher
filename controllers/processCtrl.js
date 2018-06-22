
(function () {
    
app.controller("processCtrl", function (AclService,app) {
    var prc = this;
    prc.toolList = [
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
    prc.partList=[
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
    prc.partName="SANY - BODY INNER";
    prc.srNo=1;
    prc.counter=1;
    prc.warningStatus=false;
   var currentdate = new Date();  
   var format=currentdate.getHours()>11?'PM':'AM';
   
    prc.date=currentdate.getDate() + "/"+(currentdate.getMonth()+1)
    + "/" + currentdate.getFullYear();
    prc.time=currentdate.getHours() + ":" 
    + currentdate.getMinutes() +" "+ format;
    prc.submit=function(){
        if($('#processForm').valid()){
            prc.warningStatus=false;
            prc.srNo++;
            for(var i=0;i<prc.parameterList.length;i++){
                if(prc.parameterList[i].actual!=''){
                    prc.parameterList[i].counter=5;
                    prc.parameterList[i].mendatory=false;
                    prc.parameterList[i].actual='';
                    prc.parameterList[i].tool=''
                    prc.parameterList[i].remark='';
                    
                }else{
                    if(prc.parameterList[i].counter>1){
                        prc.parameterList[i].counter=prc.parameterList[i].counter-1;
                        prc.parameterList[i].mendatory=false;
                    } 
                    if(prc.parameterList[i].counter==1){
                        prc.parameterList[i].mendatory=true;
                    }
                    
                }
            }
            console.log(prc.parameterList);
            $('.actual,.tool,.remark').val('');
        }else{
            prc.warningStatus=true;
        }
       
        
    }
    prc.parameterList=prc.partList[0].selectedParameterList;
    prc.partChange=function(){
        
        prc.srNo=1;
        var part=JSON.parse($('#partName option:selected').attr('data'));
         
        prc.parameterList=part.selectedParameterList;
    }
    
})
    
})();