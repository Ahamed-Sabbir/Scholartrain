INSERT INTO authority_table
VALUES(1, 'ROLE_ADMIN');

INSERT INTO authority_table
VALUES(2, 'ROLE_STUDENT');

INSERT INTO authority_table
VALUES(3, 'ROLE_UNIVERSITY');

INSERT INTO user_table (user_id, profile_name, username, password)
VALUES(101L, 'Minhajul', 'wrench', 'iamadmin');

INSERT INTO user_table (user_id, profile_name, username, password)
VALUES(105L, 'Ramisa', 'ramisa', 'ramisa');

INSERT INTO user_table (user_id,profile_name, username, password)
VALUES(102L, 'DIU', 'diu', 'diu');

INSERT INTO user_table (user_id,profile_name, username, password)
VALUES(103L, 'BUET', 'buet', 'buet');

INSERT INTO user_table (user_id,profile_name, username, password)
VALUES(104L, 'DU', 'du', 'du');

INSERT INTO user_authority (user_id, authority_id)
VALUES(101L, 1);

INSERT INTO user_authority (user_id, authority_id)
VALUES(101L, 2);

INSERT INTO user_authority (user_id, authority_id)
VALUES(101L, 3);

INSERT INTO user_authority (user_id, authority_id)
VALUES(102L, 3);
INSERT INTO user_authority (user_id, authority_id)
VALUES(103L, 3);
INSERT INTO user_authority (user_id, authority_id)
VALUES(104L, 3);

INSERT INTO user_authority (user_id, authority_id)
VALUES(105L, 2);

-- .................scholarship related
-- Insert Tags
INSERT INTO tag_table (tag) VALUES
    ('Science'),
    ('Technology'),
    ('Engineering'),
    ('Mathematics'),
    ('Arts'),
    ('Humanities'),
    ('Business'),
    ('Health'),
    ('Environment'),
    ('Social Sciences'),
    ('Information Technology'),
    ('Education'),
    ('Law'),
    ('Agriculture'),
    ('Economics'),
    ('Architecture'),
    ('Nursing'),
    ('Psychology'),
    ('Data Science'),
    ('Finance');

-- Insert Scholarships
INSERT INTO scholarship_table (scholarship_title, scholarship_description, deadline, image_url, eligibility, link, creator_id) VALUES
      ('National Science Scholarship', 'A scholarship for outstanding students in science.', '2024-12-31', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'High school graduates with a focus on science.', 'http://example.com/national-science', 102L),
      ('Tech Innovators Grant', 'Support for students pursuing technology-related fields.', '2025-01-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Must be enrolled in a tech program.', 'http://example.com/tech-innovators', 102L),
      ('Engineering Excellence Award', 'Award for engineering students demonstrating excellence.', '2025-03-01', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Engineering students with a GPA above 3.5.', 'http://example.com/engineering-excellence', 103L),
      ('Mathletes Scholarship', 'For students excelling in mathematics competitions.', '2025-05-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Participants in math competitions.', 'http://example.com/mathletes', 103L),
      ('Arts for All Scholarship', 'Scholarship for students in the arts.', '2025-06-30', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Must demonstrate artistic talent.', 'http://example.com/arts-for-all', 104L),
      ('Humanities Fellowship', 'For students pursuing degrees in humanities.', '2025-07-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in a humanities program.', 'http://example.com/humanities-fellowship', 104L),
      ('Business Leadership Grant', 'For future business leaders.', '2025-08-01', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Business students with leadership potential.', 'http://example.com/business-leadership', 102L),
      ('Health Sciences Scholarship', 'Support for students in health sciences.', '2025-09-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Must be enrolled in a health sciences program.', 'http://example.com/health-sciences', 102L),
      ('Environmental Studies Award', 'For students committed to environmental issues.', '2025-10-30', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Students in environmental studies.', 'http://example.com/environmental-studies', 103L),
      ('Social Sciences Scholarship', 'Support for social sciences students.', '2025-11-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in a social sciences program.', 'http://example.com/social-sciences', 103L),
      ('IT Innovators Scholarship', 'For innovative students in IT.', '2025-12-01', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'IT students with innovative projects.', 'http://example.com/it-innovators', 104L),
      ('Education for All Grant', 'Support for education-focused students.', '2026-01-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in education studies.', 'http://example.com/education-for-all', 104L),
      ('Law and Justice Scholarship', 'For students pursuing a career in law.', '2026-02-28', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Law students with a passion for justice.', 'http://example.com/law-justice', 102L),
      ('Agricultural Development Award', 'For students in agricultural studies.', '2026-03-31', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in agriculture programs.', 'http://example.com/agricultural-development', 102L),
      ('Economic Research Grant', 'For students engaged in economic research.', '2026-04-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Students in economics or related fields.', 'http://example.com/economic-research', 103L),
      ('Architecture Scholarship', 'Support for architecture students.', '2026-05-30', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Must be enrolled in an architecture program.', 'http://example.com/architecture', 103L),
      ('Nursing Scholarship', 'For students in nursing programs.', '2026-06-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Nursing students with a passion for healthcare.', 'http://example.com/nursing', 104L),
      ('Psychology Scholarship', 'Support for students studying psychology.', '2026-07-31', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in psychology programs.', 'http://example.com/psychology', 104L),
      ('Data Science Scholarship', 'For students in data science.', '2026-08-15', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Data science students with innovative projects.', 'http://example.com/data-science', 102L),
      ('Finance Scholarship', 'Support for finance students.', '2026-09-30', 'https://i.postimg.cc/gjr82W0v/scholarship.webp', 'Enrollment in finance programs.', 'http://example.com/finance', 102L);

-- INSERT INTO scholarship_table (scholarship_title, scholarship_description, deadline, image_url, eligibility, link)
-- VALUES
--     ('National Science Scholarship', 'A scholarship for outstanding science students.', '2024-12-31', 'http://example.com/science.jpg', 'High school students', 'http://example.com/science'),
--     ('Tech Innovators Grant', 'Funding for tech innovation projects.', '2024-10-15', 'http://example.com/tech.jpg', 'College students', 'http://example.com/tech'),
--     ('Engineering Excellence Award', 'Award for engineering students.', '2024-11-20', 'http://example.com/engineering.jpg', 'Undergraduate students', 'http://example.com/engineering'),
--     ('Mathletes Scholarship', 'For students excelling in mathematics.', '2024-12-15', 'http://example.com/math.jpg', 'High school students', 'http://example.com/math'),
--     ('Arts for All Scholarship', 'Support for aspiring artists.', '2024-11-01', 'http://example.com/arts.jpg', 'College students', 'http://example.com/arts'),
--     ('Humanities Fellowship', 'Fellowship for humanities research.', '2024-10-10', 'http://example.com/humanities.jpg', 'Graduate students', 'http://example.com/humanities'),
--     ('Business Leadership Grant', 'For future business leaders.', '2024-09-30', 'http://example.com/business.jpg', 'Undergraduate students', 'http://example.com/business'),
--     ('Health Sciences Scholarship', 'For students in health sciences.', '2024-10-31', 'http://example.com/health.jpg', 'Undergraduate students', 'http://example.com/health'),
--     ('Environmental Studies Award', 'Support for environmental studies.', '2024-12-01', 'http://example.com/environment.jpg', 'Graduate students', 'http://example.com/environment'),
--     ('Social Sciences Scholarship', 'For students in social sciences.', '2024-10-25', 'http://example.com/social.jpg', 'College students', 'http://example.com/social'),
--     ('IT Innovators Scholarship', 'For students in information technology.', '2024-11-15', 'http://example.com/it.jpg', 'Undergraduate students', 'http://example.com/it'),
--     ('Education for All Grant', 'Funding for educational initiatives.', '2024-10-05', 'http://example.com/education.jpg', 'Graduate students', 'http://example.com/education'),
--     ('Law and Justice Scholarship', 'For students pursuing law.', '2024-12-20', 'http://example.com/law.jpg', 'College students', 'http://example.com/law'),
--     ('Agricultural Development Award', 'For students in agriculture.', '2024-11-30', 'http://example.com/agriculture.jpg', 'Undergraduate students', 'http://example.com/agriculture'),
--     ('Economic Research Grant', 'Funding for economic research projects.', '2024-10-22', 'http://example.com/economics.jpg', 'Graduate students', 'http://example.com/economics'),
--     ('Architecture Scholarship', 'For aspiring architects.', '2024-12-10', 'http://example.com/architecture.jpg', 'Undergraduate students', 'http://example.com/architecture'),
--     ('Nursing Scholarship', 'For students pursuing nursing.', '2024-11-25', 'http://example.com/nursing.jpg', 'College students', 'http://example.com/nursing'),
--     ('Psychology Scholarship', 'For students in psychology.', '2024-12-05', 'http://example.com/psychology.jpg', 'Undergraduate students', 'http://example.com/psychology'),
--     ('Data Science Scholarship', 'For students in data science.', '2024-10-30', 'http://example.com/data.jpg', 'Graduate students', 'http://example.com/data'),
--     ('Finance Scholarship', 'For students pursuing finance.', '2024-11-15', 'http://example.com/finance.jpg', 'Undergraduate students', 'http://example.com/finance');

-- Populate scholarship_tag table
INSERT INTO scholarship_tag (scholarship_id, tag_id) VALUES
     (1, 1), -- National Science Scholarship with Science
     (1, 3), -- National Science Scholarship with Engineering
     (1, 5), -- National Science Scholarship with Arts
     (2, 2), -- Tech Innovators Grant with Technology
     (2, 11), -- Tech Innovators Grant with Information Technology
     (3, 3), -- Engineering Excellence Award with Engineering
     (3, 12), -- Engineering Excellence Award with Education
     (4, 4), -- Mathletes Scholarship with Mathematics
     (4, 8), -- Mathletes Scholarship with Health
     (5, 5), -- Arts for All Scholarship with Arts
     (5, 10), -- Arts for All Scholarship with Social Sciences
     (6, 6), -- Humanities Fellowship with Humanities
     (6, 1), -- Humanities Fellowship with Science
     (7, 7), -- Business Leadership Grant with Business
     (7, 2), -- Business Leadership Grant with Technology
     (8, 8), -- Health Sciences Scholarship with Health
     (8, 13), -- Health Sciences Scholarship with Law
     (9, 9), -- Environmental Studies Award with Environment
     (9, 4), -- Environmental Studies Award with Mathematics
     (10, 10), -- Social Sciences Scholarship with Social Sciences
     (10, 15), -- Social Sciences Scholarship with Economics
     (11, 11), -- IT Innovators Scholarship with Information Technology
     (11, 2), -- IT Innovators Scholarship with Technology
     (12, 12), -- Education for All Grant with Education
     (12, 14), -- Education for All Grant with Agriculture
     (13, 13), -- Law and Justice Scholarship with Law
     (13, 7), -- Law and Justice Scholarship with Business
     (14, 14), -- Agricultural Development Award with Agriculture
     (14, 9), -- Agricultural Development Award with Environment
     (15, 15), -- Economic Research Grant with Economics
     (15, 6), -- Economic Research Grant with Humanities
     (16, 16), -- Architecture Scholarship with Architecture
     (16, 4), -- Architecture Scholarship with Mathematics
     (17, 17), -- Nursing Scholarship with Nursing
     (17, 8), -- Nursing Scholarship with Health
     (18, 18), -- Psychology Scholarship with Psychology
     (18, 6), -- Psychology Scholarship with Humanities
     (19, 19), -- Data Science Scholarship with Data Science
     (19, 10), -- Data Science Scholarship with Social Sciences
     (20, 20), -- Finance Scholarship with Finance
     (20, 2); -- Finance Scholarship with Technology
