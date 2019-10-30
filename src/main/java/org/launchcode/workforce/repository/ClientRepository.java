package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
