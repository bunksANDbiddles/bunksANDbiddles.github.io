using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;



public class Reports
{
   private List<ReportsPupil> _Pupils = new List<ReportsPupil>();

    

   public List<ReportsPupil> Pupils { get { return _Pupils; } }

 

   

public void AddPupil(int pupilID,  string admissionNo )
{
    _Pupils.Add(new ReportsPupil { PupilID = pupilID, AdmissionNo = admissionNo  });
    
}



  public void Clear()     
  {         
      _Pupils.Clear();
    
   }          
   public void RemovePupil(int index)     
   {         
       _Pupils.RemoveAt(index);
      
       
    } 

 


    }   

    ///// <summary>
///// Summary description for Reports
///// </summary>

public class ReportsPupil {

    public int PupilID { get; set; }
   
    public string AdmissionNo { get; set;}
   
    
}




    
 







