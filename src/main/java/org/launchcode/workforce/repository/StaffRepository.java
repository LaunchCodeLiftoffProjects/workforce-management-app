package org.launchcode.workforce.repository;


import org.launchcode.workforce.model.Staff;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StaffRepository extends JpaRepository<Staff, Long> {
    boolean existsById(Long id);

}