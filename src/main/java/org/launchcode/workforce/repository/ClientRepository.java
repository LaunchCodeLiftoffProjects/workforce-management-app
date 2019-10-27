package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.ClientName;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<ClientName, Long> {
}
