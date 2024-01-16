# Contact-Log

Contact List App for CIS 2106 NCII

# Members

- Abellana - UI/UX
- Bonghanoy - Project Manager, Frontend Developer
- Nakila - Backend Developer
- Pantino - Backend Developer
- Villanueva - Frontend Developer

# Workflow and Contribution

All frontend code will be put in the `/client` folder. Tech stack will be React and Tailwind

All backend code will be put in the `/server` folder. As per requirement of the NCII Program, we will use Java.

To contribute, `Fork` this repository in your Github which can be seen on the top right.
![image](https://github.com/NotRelix/e-pitaka/assets/111989096/089875d8-74bc-4919-809c-b4ff11e82c79)

Go to your Forked Repository, click on `Code`, and copy the URL as shown.

![image](https://github.com/NotRelix/e-pitaka/assets/111989096/09e93194-be12-423d-845b-64540ac63a0e)

In your terminal, navigate to the Directory you want it to be saved, and with the saved URL do the following:

```bash
git clone <the_url_you_copied>

git clone https://github.com/NotRelix/e-pitaka.git    # Example
cd e-pitaka                                           # Make that file the current directory
```

You can then make changes within that file whenever you want, but make sure to `git pull` everytime you start coding to fetch the most recent changes.
Once you are done adding new features, you want the changes to appear in your Forked Repository.

```bash
git add .                              # Prepares all files to be pushed
git commit -m "Your commit message"    # A commit message example would be "fix: handle zero division"
git push origin main                   # Makes the changes to your Forked Repository
```

Once that is finished, go to your Forked Repository and click on `Compare and Pull Request` to make a pull request on the actual Repository.
Wait for the owner of the Repository to approve or suggest you to make more changes.
