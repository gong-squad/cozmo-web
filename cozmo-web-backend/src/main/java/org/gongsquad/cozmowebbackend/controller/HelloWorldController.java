package org.gongsquad.cozmowebbackend.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloWorldController {
    @GetMapping("/api/helloWorld")
    public String hello() {
        return "Hello World";
    }
    
}
