function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var fname=document.getElementById("fname_row"+no+"");
 var lname=document.getElementById("lname_row"+no+"");
 var phone=document.getElementById("phone_row"+no+"");
 var email=document.getElementById("email_row"+no+"");
 var emp=document.getElementById("emp_row"+no+"");
	
 var fname_data=fname.innerHTML;
 var lname_data=lname.innerHTML;
 var phone_data=phone.innerHTML;
 var email_data=email.innerHTML;
 var emp_data=emp.innerHTML;
	
 fname.innerHTML="<input type='text' id='fname_text"+no+"' value='"+fname_data+"'>";
 lname.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lname_data+"'>";
 phone.innerHTML="<input type='text' id='phone_text"+no+"' value='"+phone_data+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+email_data+"'>";
 emp.innerHTML="<input type='text' id='emp_text"+no+"' value='"+emp_data+"'>";
}

function save_row(no)
{
 var fname_val=document.getElementById("fname_text"+no).value;
 var lname_val=document.getElementById("lname_text"+no).value;
 var phone_val=document.getElementById("phone_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var emp_val=document.getElementById("emp_text"+no).value;

 document.getElementById("fname_row"+no).innerHTML=fname_val;
 document.getElementById("lname_row"+no).innerHTML=lname_val;
 document.getElementById("phone_row"+no).innerHTML=phone_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("emp_row"+no).innerHTML=emp_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_fname=document.getElementById("new_fname").value;
 var new_lname=document.getElementById("new_lname").value;
 var new_phone=document.getElementById("new_phone").value;
 var new_email=document.getElementById("new_email").value;
 var new_emp=document.getElementById("new_emp").value;
	
 var table=document.getElementById("data_table");
 var table_len=table.rows.length;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='fname_row"+table_len+"'>"+new_fname+"</td><td id='Lname_row"+table_len+"'>"+new_lname+"</td><td id='phone_row"+table_len+"'>"+new_phone+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='emp_row"+table_len+"'>"+new_emp+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 document.getElementById("new_fname").value="";
 document.getElementById("new_lname").value="";
 document.getElementById("new_phone").value="";
 document.getElementById("new_email").value="";
 document.getElementById("new_emp").value="";
}
