class ProjectUtils {
  final String banners;
  final String icons;
  final String titles;
  final String description;
  final String links;
  ProjectUtils({
    required this.banners,
    required this.icons,
    required this.titles,
    required this.description,
    required this.links,
  });
}

List<ProjectUtils> projectUtils = [
  ProjectUtils(
    banners: 'assets/imgs/wellwise_background.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Wellwise App',
    description:
        'A health and fitness app that helps you to track your daily water intake by connecting to smart bottle.',
    links: 'https://play.google.com/store/apps/details?id=com.rosette.rosette',
  ),
  ProjectUtils(
    banners: 'assets/imgs/findola_capital.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Findola Capital',
    description:
        'Mutual Fund App. Worked on external funds feature',
    links: 'https://play.google.com/store/apps/details?id=com.findolacapital.findola',
  ),
  ProjectUtils(
    banners: 'assets/imgs/auto_silent_app_background.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Auto Silent App',
    description:
        'This is a app that automatically silences your phone when you are in a meeting or class based on the time set.',
    links: 'https://github.com/rao-suraj/AutoSilentAppFlutter',
  ),
  ProjectUtils(
    banners: 'assets/imgs/chat_bot_background.png',
    icons: 'assets/imgs/crewai.png',
    titles: 'Task List Generator',
    description:
        'An AI agent that will help you to generate a task list by taking project requirements.',
    links: 'https://github.com/rao-suraj/TaskListAgent',
  ),
];
