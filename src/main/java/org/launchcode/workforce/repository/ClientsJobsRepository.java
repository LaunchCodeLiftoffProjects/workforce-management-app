package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.ClientsJobs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientsJobsRepository extends JpaRepository<ClientsJobs, Long>{
    List<ClientsJobs> findByLocationId(Long locationId);
    List<ClientsJobs> findByClientId(Long clientId);

}
