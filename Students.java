import java.util.Scanner;

class Students
{
    public void studentDetails()
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("First Name : ");
        String first_name = new String(sc.next());                              //String Class
        System.out.print("Last Name : ");
        String last_name = new String(sc.next());
        
        first_name = first_name.concat(" ");
        first_name.concat(last_name);
        String name = first_name.concat(last_name);
        
        
        System.out.print("Grade of the student : ");
        StringBuffer grades = new StringBuffer(sc.next());             //StringBuffer Class
        grades.insert(2, " grade");
        System.out.println("********************************");
        System.out.println("Student Grade Details");
        System.out.println("********************************");
        System.out.println("Student Name : "+name);
        System.out.println("Grade of the student : "+grades);
        
    }

    public static void main(String args[])
    {
        Students s1 = new Students();
        s1.studentDetails();
    }
}