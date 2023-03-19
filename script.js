function submit() {
            
    let consumed_unit = document.getElementById("caon_unit").value;
    let conncted_load = document.getElementById("conn_load").value;
    let electricity_charge;
    let fixed_charge;
    let total_bill ;
    let unit_charge;
    
    
    // Fixed Charge
    if (conncted_load <= 2) {
        fixed_charge = 15;
    }
    else if ( conncted_load >=2  &&   conncted_load <= 4 ){
        fixed_charge = 25;
    }
    else if ( conncted_load >=4  &&   conncted_load <= 6 ){
        fixed_charge = 45;
    }
    else{
        fixed_charge = 70;
    }
    
    // Unit Charge
    if (consumed_unit >=0 && consumed_unit <= 50) {
        unit_charge = 3.05;
        electricity_charge = consumed_unit * unit_charge;
    }
    else if(consumed_unit >=51 && consumed_unit <= 100){
        unit_charge = 3.5;
        electricity_charge = consumed_unit * unit_charge;
    }
    else if(consumed_unit >=101 && consumed_unit <= 250){
        unit_charge = 4.15;
        electricity_charge = consumed_unit * unit_charge;
    }
    else{
        unit_charge =5.2;
        electricity_charge = consumed_unit * unit_charge;
    }

    total_bill = electricity_charge + fixed_charge;
    document.getElementById("e-charge").value = electricity_charge;
    document.getElementById("f-charge").value = fixed_charge;
    document.getElementById("total_bill").value = total_bill;
}