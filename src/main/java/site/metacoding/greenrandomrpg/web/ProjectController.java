package site.metacoding.greenrandomrpg.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjectController {
    @GetMapping("/battlePage")
    public String battlePage(){
        return "/battlePage";
    }
    @GetMapping("/RealBattle")
    public String battlereal(){
        return "/RealBattle";
    }
    @GetMapping("/shopping")
    public String shop(){
        return "/shop";
    }


}
