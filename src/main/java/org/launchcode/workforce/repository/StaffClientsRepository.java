package org.launchcode.workforce.repository;


import org.launchcode.workforce.model.StaffClients;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffClientsRepository extends JpaRepository<StaffClients, Long>{
    List<StaffClients> findByStaffId(Long staffId);
    List<StaffClients> findByClientId(Long clientId);

}
