package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/aluno")
	public String aluno() {
		return "Nome: João da Silva<br>Curso: Sistemas da Informação";
	}

	@GetMapping("/professor")
	public String professor() {
		return "Nome: Ana Paula Canal<br>Disciplina: Sistemas Operacionais";
	}

	@GetMapping("/calculadora")
	public double calculadora(@RequestParam double a, @RequestParam double b, @RequestParam String operacao) {
		switch (operacao) {
			case "soma":
				return a + b;
			case "subtracao":
				return a - b;
			case "multiplicacao":
				return a * b;
			case "divisao":
				return a / b;
			default:
				throw new IllegalArgumentException("Operação inválida: " + operacao);
		}
	}

	@ExceptionHandler(IllegalArgumentException.class)
	public String handleInvalidOperation(IllegalArgumentException e) {
		return "Aviso: " + e.getMessage();
	}
}
