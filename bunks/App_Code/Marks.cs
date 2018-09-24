using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



public class Marks
{
   private List<MarksStudent> _Students = new List<MarksStudent>();

    

   public List<MarksStudent> Students { get { return _Students; } }

 

   

public void AddStudent(int studentID,  string admissionNo )
{
      _Students.Add(new MarksStudent { StudentID = studentID, AdmissionNo = admissionNo  });
    
}



  public void Clear()     
  {         
      _Students.Clear();
    
   }          
   public void RemoveStudent(int index)     
   {         
       _Students.RemoveAt(index);
      
       
    } 

   


    }   

    ///// <summary>
///// Summary description for Marks
///// </summary>

public class MarksStudent {

    public int StudentID { get; set; }
   
    public string AdmissionNo { get; set;}
   
    
}




    
 



