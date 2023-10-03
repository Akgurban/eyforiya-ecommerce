import { StorageSerializers } from "@vueuse/core";

export const useFetchWithCache = async (url, opts) => {
  const { locale } = useI18n();

  const cached = useSessionStorage(url, null, {
    serializer: StorageSerializers.object,
  });

  if (!cached.value) {
    const { data, error, status } = await useMyFetch(url);

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch lesson`,
      });
    }

    cached.value = data.value;
  } else {
    // console.log(`getting from cache`);
  }
  return cached.value;
};
