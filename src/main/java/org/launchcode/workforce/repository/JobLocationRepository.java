package org.launchcode.workforce.repository;

import org.launchcode.workforce.model.JobLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobLocationRepository extends JpaRepository<JobLocation, Long> {}
