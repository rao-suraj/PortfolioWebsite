class ServicesUtils {
  final String name;
  final String icon;
  final List<String> tool;
  final String description;

  ServicesUtils(
      {required this.name,
      required this.icon,
      required this.description,
      required this.tool});
}

List<ServicesUtils> servicesUtils = [
  ServicesUtils(
    name: 'Android App Development',
    icon: 'assets/icons/android.svg',
    description:
        "Are you interested in bringing your app idea into reality.",
    tool: ['Flutter','Android (Kotlin or Java)'],
  ),
  ServicesUtils(
    name: 'iOS App Development',
    icon: 'assets/icons/apple.svg',
    description:
        "Are you interested in bringing your app idea into reality.",
    tool: ['Flutter'],
  ),
  ServicesUtils(
    name: 'AI Development',
    icon: 'assets/icons/ai_platform.svg',
    description:
        "Want to create an AI based solution? Reducting time and cost for your business.",
    tool: ['Llama Index', 'Langchain', 'Python'],
  ),
  // ServicesUtils(
  //   name: 'Web Development',
  //   icon: 'assets/icons/website.svg',
  //   description:
  //       "Do you have an idea for your next great website? Let's make it a reality.",
  //   tool: ['Flutter', 'Html,css,js', 'Android (Kotlin or Java)'],
  // ),
];
