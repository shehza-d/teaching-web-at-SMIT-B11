# Operation Systems

## An Introduction to Operating Systems

**Application software** performs specific task for the user.

**System software** operates and controls the computer system and provides a platform to run application software.

An **operating system** is a piece of software that manages all the resources of a computer
system, both hardware and software, and provides an environment in which the user can
execute programs in a convenient and efficient manner by hiding underlying
complexity of the hardware and acting as a `resource manager`.

### Why OS?

1. What if there is no OS?
   - Bulky and complex app. (Hardware interaction code must be in app’s code base)
   - Resource exploitation by 1 App.
   - No memory protection. (Security risk)
1. What is an OS made up of?
   - **Collection of system software**.

### An operating system function

- Access to the computer hardware.
- Interface between the user and the computer hardware
- **`Resource management`** (Aka, Arbitration) (memory, device, file, security, process etc)
- **Hides the underlying complexity of the hardware.** (Aka, `Abstraction`)
- Facilitates execution of application programs by providing `isolation` and `protection`.

| Layers               |
| -------------------- |
| User                 |
| Application programs |
| Operating system     |
| Computer hardware    |

---

## Details of OS

An operating system (OS) is a complex software program that serves as an intermediary between computer hardware and user applications. It provides a set of essential functions to manage hardware resources, facilitate communication between software and hardware components, and offer a user interface. The main components of an operating system include:

1. **Kernel:** The core component of the operating system that manages hardware resources, such as the central processing unit (CPU), memory, disk drives, and input/output devices. The kernel is responsible for task scheduling, memory management, and handling system calls.

2. **File System:** A mechanism for organizing and storing files on storage devices such as hard drives, solid-state drives, and other storage media. The file system manages file creation, deletion, reading, and writing.

3. **Device Drivers:** Software components that enable communication between the operating system and hardware devices. Device drivers act as intermediaries, allowing the OS to interact with peripherals like printers, keyboards, and graphics cards.

4. **User Interface:** The part of the operating system that allows users to interact with the computer. This can take the form of a command-line interface (CLI) or a graphical user interface (GUI). The GUI typically includes elements such as windows, icons, menus, and pointers (WIMP).

5. **System Libraries:** Collections of precompiled code that provide standard functions and services to applications. These libraries help developers avoid writing low-level code for common tasks, promoting code reuse and standardization.

6. **Shell:** The command interpreter that allows users to interact with the operating system through a command-line interface. It interprets user commands and communicates with the kernel to execute them.

7. **Security Subsystem:** Components responsible for ensuring the security and integrity of the system, including user authentication, access control, encryption, and protection against malware.

8. **Networking Stack:** A set of protocols and components that enable communication between computers in a network. This includes the implementation of networking protocols such as TCP/IP, as well as networking services like DHCP and DNS.

9. **System Utilities:** Tools and applications that perform system management tasks, such as disk management, system monitoring, backup, and recovery.

These components work together to provide a stable and efficient environment for both system-level processes and user applications, allowing the computer to perform a wide range of tasks. Different operating systems may have variations in their architecture and components, but these are common elements found in most modern operating systems.
