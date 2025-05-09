using System.ComponentModel.DataAnnotations;

namespace PizzaShop.Entity.ViewModel;

public class AddSectionViewModel
{
    public int? Sectionid {get;set;}

    [Required(ErrorMessage = "Name is Required.")]
    public string? SectionName { get; set; } 
    public string? Description {get; set; }

}