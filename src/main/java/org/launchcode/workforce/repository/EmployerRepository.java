package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerRepository extends JpaRepository<Employer, Long> {}
