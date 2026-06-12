package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController; // Add this import

@SpringBootApplication
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@GetMapping("/nome")
	public String nome() {
	return "João da Silva";
	}
	
	@GetMapping("/cpf")
	public String cpf() {
	return "123.456.789-00";
	}
	
	@GetMapping("/endereço")
	public String endereco() {
	return "João da Silva - Rua das Flores, 123";
	}
	
	@GetMapping("/soma")
	public double soma( 
		@RequestParam double a,
		@RequestParam double b) {
	return a + b;
	}

}
