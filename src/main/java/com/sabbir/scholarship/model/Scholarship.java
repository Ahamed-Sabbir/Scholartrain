package com.sabbir.scholarship.model;

import com.sabbir.security.model.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "scholarship_table")
public class Scholarship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "scholarship_id")
    private Long id;
    @Column(name = "scholarship_title")
    private String title;
    @Column(name = "scholarship_description")
    private String description;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(
            name = "scholarship_tag",
            joinColumns = @JoinColumn(name = "scholarship_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<Tag> tags = new HashSet<>();
    @Column(name = "deadline")
    private Date deadline;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "eligibility")
    private String eligibility;
    @Column(name = "link")
    private String link;

    // University who created this scholarship
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "creator_id")
    private User creator;

    @ManyToMany(
            fetch = FetchType.LAZY,
            mappedBy = "appliedScholarships"
    )
    private List<User> appliedStudents = new ArrayList<>();
}
