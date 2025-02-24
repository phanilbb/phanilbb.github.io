document.addEventListener("DOMContentLoaded", function () {
    if (!window.profileData) {
        console.error("Profile data not found!");
        return;
    }

    let button = document.getElementById("download-resume");
    button.addEventListener("click", function () {
        window.open(profileData.resume_url, "_blank");
    });

    document.getElementById("name").innerText = profileData.name;

    let addressinAnchor = document.getElementById("address");
    addressinAnchor.href = profileData.address_url;
    document.getElementById("address").textContent = profileData.address;

    let phoneinAnchor = document.getElementById("phone");
    phoneinAnchor.href = `Tel:${profileData.email}`;
    document.getElementById("phone").textContent = profileData.phone;

    let emailinAnchor = document.getElementById("email");
    emailinAnchor.href = `mailto:${profileData.email}`;
    document.getElementById("email").textContent = profileData.email;

    // LinkedIn
    let linkedinAnchor = document.getElementById("linkedin");
    linkedinAnchor.href = profileData.linkedin_url;
    document.getElementById("linkedin").textContent = profileData.linkedin;

    // Instagram
    let instagramAnchor = document.getElementById("instagram");
    instagramAnchor.href = profileData.instagram_url;
    document.getElementById("instagram").textContent = profileData.instagram;

    // Work Experience
    let experienceContainer = document.getElementById("work-experience");
    profileData.experience.forEach(exp => {
        let expHTML = `<h3>${exp.role}, ${exp.company} <span class="date">${exp.period}</span></h3>`;
        exp.projects.forEach(project => {
            expHTML += `<h4>${project.name}</h4><ul>`;
            project.details.forEach(detail => {
                expHTML += `<li>${detail}</li>`;
            });
            expHTML += `</ul>`;
        });
        experienceContainer.innerHTML += expHTML;
    });

    // Education
    let educationContainer = document.getElementById("education");
    profileData.education.forEach(edu => {
        let eduHTML = `<h3>${edu.degree}, ${edu.institution} <span class="date">${edu.period}</span></h3><ul>`;
        edu.details.forEach(detail => {
            eduHTML += `<li>${detail}</li>`;
        });
        eduHTML += `</ul>`;
        educationContainer.innerHTML += eduHTML;
    });

    // Technical Skills
    let skillsContainer = document.getElementById("technical-skills");
    let skillsHTML = `<table>
        <tr><th>Category</th><th>Skills</th></tr>`;

    profileData.technicalSkills.forEach(skillCategory => {
        skillsHTML += `
        <tr>
            <td><strong>${skillCategory.category}</strong></td>
            <td>${skillCategory.skills.join("<br/>")}</td>
        </tr>`;
    });

    skillsHTML += `</table>`;
    skillsContainer.innerHTML = skillsHTML;

        // about me
    let i = 0;
    function typeText() {
        if (i < profileData.about_me.length) {
            document.querySelector(".typing").textContent += profileData.about_me.charAt(i);
            i++;
            setTimeout(typeText, 50);
        }
    }
    typeText();
});

